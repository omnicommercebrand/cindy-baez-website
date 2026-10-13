# How to Change Your Class Date

> For Cindy. One page, about 30 seconds, no tech needed.
> Updated October 13, 2026 · Live class: **Sunday, October 25, 2026 · 1:00–4:00 PM**

---

## Your one link

**cindybaez.com/class/admin**

Bookmark it, or add it to your phone's home screen (Safari → Share → *Add to Home Screen*).

---

## Changing the date (4 taps)

1. **Open** cindybaez.com/class/admin. The first time, type your website password. You stay signed in on that device for two weeks.
2. **Pick the date.** Change the start and end time only if they're different. They're already set to your current times.
3. **Tap "Update my class."** You'll see exactly what your pages will say.
4. **Tap "Yes, update everything."** Wait about 10 seconds.

You'll get a checklist of green ticks:

- ✓ Booking calendar now opens on your new date
- ✓ Event description updated on cal.com
- ✓ Verified on cal.com: 15 of 15 seats open
- ✓ Registration page shows your new date
- ✓ Thank-you page shows your new date

That's it. Nothing else to do.

---

## What changes for you automatically

| Where | What updates |
|-------|--------------|
| Registration page (cindybaez.com/class) | Date, time, Google search info |
| Thank-you page (after payment) | Date, time, "arrive by," countdown, "add to calendar" |
| cal.com booking calendar | Only your new date can be booked |
| cal.com event description | The Date and Time lines (the rest of your text stays as you wrote it) |
| Reminders | cal.com emails and texts everyone who books |

---

## Good to know

- **Women already booked on the old date.** If anyone has booked the date you're replacing, the page warns you before you confirm. Their bookings don't move on their own, so message them or reschedule them inside cal.com.
- **If something doesn't finish,** just tap **Try again.** Running it twice never doubles anything.
- **If a page tick says "still refreshing,"** wait a minute and look at the page. It always catches up within 10 minutes.
- **After a class has passed,** the settings page shows a reminder to pick your next date.
- **Price, address and seat count** stay the same. Ask Ishan if those ever change.

---

## For Ishan: how it works under the hood

**Source of truth = cal.com.** The pages read the class date live from the date override on Cindy's "Self Defense Class" schedule. They can't drift from her calendar.

```
Cindy → /class/admin → POST /api/class/date (editor-password session)
        → lib/class-cal.js setClassDate()
            1. PATCH schedule 2325390 overrides → [{ new date, start, end }]
            2. PATCH event-type 6948640 description (Date/Time lines only) + length
            3. GET /slots → verify the new date is bookable
        → revalidateTag('class-event') + revalidatePath('/class', '/class/confirmed')
        → browser confirms both pages now show the new date
```

| Piece | Location |
|-------|----------|
| Admin page | `app/class/admin/` (page, ClassAdmin, ClassLogin, admin.css) |
| API route | `app/api/class/date/route.js`, gated by `lib/editor-auth` (same `EDITOR_PASSWORD` as /editor) |
| cal.com read/write | `lib/class-cal.js` |
| Labels + static details | `components/gw/event.js` (`buildEvent()`; price/seats/address/Stripe URL) |
| CLI twin | `node scripts/new-class.mjs --show` or `--date=YYYY-MM-DD --start=HH:MM --end=HH:MM` |
| cal.com IDs | event-type `6948640`, schedule `2325390` |
| Secret | `CINDY_CALCOM_API_KEY`: Vercel Production (encrypted, sensitive) + `/Users/ishan/Claude Code/.env.local` (owner-only). Separate from RevenueFlows `CAL_API_KEY`. |

**Resilience:** if cal.com is unreachable, pages fall back to `FALLBACK_EVENT` in event.js and the admin page says so. Pages also re-read cal.com every 10 minutes, so a date changed directly in cal.com still shows up (but only the admin page rewrites the description).

**Changing price, seats or address:** edit `components/gw/event.js`, then deploy (`vercel --prod`).

**Rotating the cal.com key:** update it in `.env.local` and run `vercel env rm CINDY_CALCOM_API_KEY production` then `vercel env add CINDY_CALCOM_API_KEY production`, then redeploy.

---

**Next move:** give Cindy the website password and have her add cindybaez.com/class/admin to her home screen.
