import type { Request, Response } from 'express'
import { Router } from 'express'

const router = Router()

// Middleware to handle referral codes
router.get('/referral/:code', (req: Request, res: Response) => {
  const referralCode = req.params.code

  if (!referralCode) {
    return res.status(400).json({ error: 'Referral code is required' })
  }

  // Create a cookie that lasts for 30 days
  res.cookie('referral', referralCode, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })

  // Optionally, you can redirect the user to the homepage or a specific page
  res.redirect('/create-account')
})

export default router
