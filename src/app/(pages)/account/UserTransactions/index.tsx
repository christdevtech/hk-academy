'use client'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Spinner,
  Chip,
} from '@nextui-org/react'
import { useAsyncList } from '@react-stately/data'
import React from 'react'
import { Transaction } from '../../../../payload/payload-types'

export const UserTransactions = ({ transactions }: { transactions: Transaction[] }) => {
  // console.log(transactions)
  const list = useAsyncList({
    async load() {
      return {
        items: transactions,
      }
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          let first = a[sortDescriptor.column]
          let second = b[sortDescriptor.column]

          if (sortDescriptor.column === 'transactionDate') {
            // Parse transactionDate as Date objects for correct comparison
            first = new Date(first)
            second = new Date(second)
          }

          let cmp = (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1

          if (sortDescriptor.direction === 'descending') {
            cmp *= -1
          }

          return cmp
        }),
      }
    },
  })

  // Function to return the chip color based on status
  const getStatusChipColor = (status: string) => {
    switch (status) {
      case 'SUCCESSFUL':
        return 'success'
      case 'PENDING':
      case 'FAILED':
      case 'EXPIRED':
        return 'warning'
      case 'CREATED':
      default:
        return 'default'
    }
  }

  // Function to return the chip color based on transaction type
  const getTypeChipColor = (type: string) => {
    switch (type) {
      case 'PURCHASE':
        return 'primary'
      case 'REFERRAL_COMMISSION':
        return 'success'
      case 'WALLET_CREDIT':
        return 'secondary'
      case 'CASH_OUT':
        return 'danger'
      default:
        return 'default'
    }
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString)

    const day = date.getUTCDate()
    const year = date.getUTCFullYear()
    const month = date.toLocaleString('en-US', { month: 'long' })

    // Calculate the day suffix
    const daySuffix = day > 3 && day < 21 ? 'th' : ['st', 'nd', 'rd'][(day % 10) - 1] || 'th'

    // Calculate time in 12-hour format with AM/PM
    let hours = date.getUTCHours()
    const minutes = date.getUTCMinutes().toString().padStart(2, '0')
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12 || 12 // Convert 24-hour to 12-hour format

    return `${day}${daySuffix} ${month} ${year}, ${hours}:${minutes} ${ampm}`
  }

  return (
    <div className="min-h-[50dvh]">
      <Table
        aria-label="Example table with client side sorting"
        sortDescriptor={list.sortDescriptor}
        onSortChange={list.sort}
      >
        <TableHeader>
          <TableColumn key="amount" allowsSorting>
            Amount
          </TableColumn>
          <TableColumn key="status" allowsSorting>
            Payment Status
          </TableColumn>
          <TableColumn key="transactionDate" allowsSorting>
            Date
          </TableColumn>
          <TableColumn key="type" allowsSorting>
            Type
          </TableColumn>
        </TableHeader>
        <TableBody
          items={list.items}
          isLoading={transactions?.length < 1}
          loadingContent={<Spinner label="No Transactions..." />}
        >
          {item => (
            <TableRow key={item.updatedAt}>
              {columnKey => (
                <TableCell>
                  {columnKey === 'status' ? (
                    <Chip color={getStatusChipColor(item.status)}>{item.status}</Chip>
                  ) : columnKey === 'type' ? (
                    <Chip color={getTypeChipColor(item.type)}>{item.type}</Chip>
                  ) : columnKey === 'transactionDate' ? (
                    <p className="text-nowrap">{formatDate(getKeyValue(item, columnKey))}</p>
                  ) : (
                    getKeyValue(item, columnKey)
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
