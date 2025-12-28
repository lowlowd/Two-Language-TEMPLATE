---
publishDate: 2025-11-19T00:00:00Z
title: 'Fizz APN & MMS Settings Fix Guide 2025'
excerpt: 'Fix Fizz APN settings, MMS sending failures, and mobile data issues on Android and iPhone. Step-by-step troubleshooting for mobile.bm configuration problems.'
image: ~/assets/images/fizz-apn-settings-guide.png
category: Troubleshooting
tags:
  - fizz apn settings
  - fizz mms not working
  - fizz mobile data fix
  - android configuration
  - pixel mms fix
author: Sarah Rodriguez
---

## Fizz APN Settings Not Working? You're Not Alone

So your Fizz SIM is in. But something's off.

Maybe data won't connect. Maybe you're staring at "MMS failed to send" every time you try to share a photo. Maybe it worked yesterday and now it just... doesn't.

Frustrating? Absolutely. But I've been down this road myself. The culprit is almost always incorrect APN settings—and once you know what to check, the fix takes maybe 5 minutes.

Let's get you sorted.

---

## Quick Fix: Correct Fizz APN Settings (Copy-Paste Ready)

Before diving into troubleshooting, here are the **official Fizz APN settings** you need. These work for both mobile data and MMS:

| Setting       | Value                  |
| ------------- | ---------------------- |
| **Name**      | Fizz                   |
| **APN**       | `mobile.bm`            |
| **MMSC**      | `http://mms.mobile.bm` |
| **MMS Proxy** | `mmsproxy.mobile.bm`   |
| **MMS Port**  | `80`                   |
| **APN Type**  | `default,mms,supl`     |
| **MCC**       | `302`                  |
| **MNC**       | `720`                  |

> **Pro tip:** The **Fizz MMS proxy settings port 80 or 8080** question comes up a lot—always use **port 80**. Using 8080 will cause MMS failures.

> **New to Fizz?** Use referral code **HN9SM** to get a **$40 bonus** after your second bill.

---

## How to Manually Configure Fizz APN on Android

Fizz is supposed to send configuration settings automatically via SMS, but this doesn't always work. Here's how to set it up manually:

### Step 1: Access APN Settings

1. Open **Settings** on your Android phone
2. Navigate to **Network & Internet** → **Mobile Network** → **Access Point Names**
   - On Samsung: **Settings** → **Connections** → **Mobile Networks** → **Access Point Names**
3. Tap the **+** icon to create a new APN

### Step 2: Enter Fizz Settings

Fill in these fields exactly as shown:

- **Name:** Fizz
- **APN:** mobile.bm
- **MMSC:** http://mms.mobile.bm
- **MMS Proxy:** mmsproxy.mobile.bm
- **MMS Port:** 80
- **APN Type:** default,mms,supl

Leave all other fields blank or at default values.

### Step 3: Save and Select

1. Tap the three-dot menu → **Save**
2. Select the new **Fizz** APN as your default
3. **Restart your phone completely**

That last step? Don't skip it. I know it sounds basic. But the number of people who enter perfect settings and wonder why nothing changed... and they never restarted. _Restart the phone._

---

## How to Fix Fizz MMS Sending Failure on Pixel

Google Pixel phones and Fizz MMS issues. Name a more iconic duo. Seriously, this comes up constantly.

If you're dealing with **MMS sending failure on Pixel**, here's the checklist:

### Fix 1: Check APN Type

Make sure your APN Type includes `mms`. The correct value is:

```
default,mms,supl
```

### Fix 2: Enable Mobile Data

MMS requires an active data connection, even on Wi-Fi. Go to:

- **Settings** → **Network & Internet** → **SIMs** → Enable **Mobile data**

### Fix 3: Reset APN to Default

1. Go to **Access Point Names**
2. Tap the three-dot menu → **Reset to default**
3. Wait 30 seconds, then manually enter Fizz settings again

### Fix 4: Clear Messages App Cache

1. Go to **Settings** → **Apps** → **Messages**
2. Tap **Storage & cache** → **Clear cache**
3. Restart your phone

---

## Cannot Send Pictures on Fizz? Check These Settings

If you **cannot send pictures with Fizz mobile data enabled**, the issue is usually one of these:

### 1. Mobile Data is Actually Off

Double-check that mobile data is truly enabled:

- Pull down your notification shade
- Look for the mobile data icon (two arrows)
- Make sure it's toggled ON

### 2. Group Messaging Disabled

For group MMS to work:

1. Open your Messages app
2. Go to **Settings** → **Advanced**
3. Enable **Group messaging** (if available)
4. Set to **Send an MMS reply to all recipients**

### 3. Message Size Too Large

Fizz caps MMS at 1MB. Send a huge photo? It fails silently. No error message, just... nothing.

- Reduce image quality in your camera settings
- Or honestly? Just use WhatsApp or Signal. MMS is kind of a relic anyway.

---

## How to Resend Fizz Network Configuration SMS

Lost your original configuration SMS? Here's **how to resend Fizz network configuration SMS notification**:

### Method 1: Through Your Fizz Account

1. Log into [fizz.ca](https://fizz.ca)
2. Go to **My Account** → **My Plan**
3. Look for **Resend network settings** or **Send configuration**
4. Check your SMS inbox within 5 minutes

### Method 2: Remove and Reinsert SIM

1. Turn off your phone
2. Remove the Fizz SIM card
3. Wait 30 seconds
4. Reinsert the SIM
5. Turn on your phone
6. The configuration SMS should arrive automatically

### Method 3: Contact Fizz Chat Support

If the above doesn't work:

1. Go to [fizz.ca](https://fizz.ca) and use the chat widget
2. Ask them to push network configuration to your device
3. They can trigger a new configuration SMS from their end

---

## Common Fizz APN Mistakes (And How to Avoid Them)

Here are the typos and errors we see most often:

| Common Mistake            | Correct Setting    |
| ------------------------- | ------------------ |
| `mobilebm` (no dot)       | `mobile.bm`        |
| `mms.bm`                  | `mms.mobile.bm`    |
| Port `8080`               | Port `80`          |
| APN Type `default` only   | `default,mms,supl` |
| Missing `http://` in MMSC | Include full URL   |

> **Watch out:** If your APN settings are **grayed out**, your phone may be carrier-locked. Contact your previous carrier to unlock it, or try resetting network settings.

---

## Still Not Working? Advanced Troubleshooting

### Check VoLTE Compatibility

If mobile data and calls both aren't working, your phone might not be VoLTE-compatible with Fizz. As of **July 31, 2025**, Fizz will shut down 3G, and all calls must go through VoLTE.

To test VoLTE compatibility:

1. Dial **#8378** (or **#TEST**) from your phone
2. Listen to the message
3. If it confirms "LTE-4G network," you're good
4. If not, see our [VoLTE troubleshooting guide](/blog/fizz-volte-emergency-calls-fix)

### Reset Network Settings (Nuclear Option)

This erases all saved Wi-Fi passwords and Bluetooth pairings, but it often fixes stubborn issues:

- **Android:** Settings → System → Reset options → Reset Wi-Fi, mobile & Bluetooth
- **iPhone:** Settings → General → Transfer or Reset → Reset → Reset Network Settings

---

## Fizz APN Settings for iPhone

Good news: iPhones usually configure themselves automatically. If not:

1. Go to **Settings** → **Cellular** → **Cellular Data Network**
2. Under **Cellular Data**, enter:
   - APN: `mobile.bm`
3. Under **MMS**, enter:
   - APN: `mobile.bm`
   - MMSC: `http://mms.mobile.bm`
   - MMS Proxy: `mmsproxy.mobile.bm`
   - MMS Max Message Size: `1048576`
4. Restart your iPhone

---

## FAQ: Fizz APN & MMS Troubleshooting

### Why does my Fizz APN keep resetting?

Some Android phones reset APN settings after updates. After each OS update, check that your Fizz APN is still selected as default.

### Can I use Fizz without APN settings?

No. APN settings are required for mobile data and MMS. Calls and SMS may work without them, but you won't have internet access.

### What if my phone doesn't have APN settings?

iPhones hide APN settings by default. Insert your Fizz SIM, restart, and wait for automatic configuration. If it doesn't work after 10 minutes, contact Fizz support.

### Does Fizz work on all unlocked phones?

Most unlocked phones work, but VoLTE compatibility matters. Check the [Fizz certified device list](https://fizz.ca) or dial #8378 to test.

### Why is MMS working but mobile data isn't?

This is rare but can happen if you have APN Type set to `mms` only. Change it to `default,mms,supl`.

### Fizz APN Settings Grayed Out?

If your **APN settings are grayed out** and you can't edit them, here's what's happening and how to fix it:

**Cause 1: Carrier Lock**
Your phone may be locked to a previous carrier (Rogers, Bell, Telus, etc.). The lock prevents APN changes.

**Fix:** Contact your previous carrier and request an unlock code. Once unlocked, you can edit APN settings freely.

**Cause 2: MDM Profile (Work Phones)**
Enterprise/work phones often have Mobile Device Management that locks settings.

**Fix:** Contact your IT department or remove the MDM profile (Settings → General → VPN & Device Management on iPhone).

**Cause 3: Android Bug**
Some Android versions have a bug that grays out APNs.

**Fix:**

1. Go to Settings → Apps → Show system apps
2. Find "Carrier Services" or "SIM Toolkit"
3. Clear cache and data
4. Restart phone

### What Happened to My APN for Fizz?

Did your data suddenly stop working? Here's **what happened to my APN for Fizz** and why settings vanish:

- **OS Update:** Android and iOS updates sometimes reset APN settings
- **SIM Swap:** Removing/reinserting SIM can trigger auto-configuration that overwrites your manual settings
- **Carrier Update:** Fizz occasionally pushes configuration changes that override existing APNs

**Prevention:**

- After any update, immediately check your APN settings
- Screenshot your working settings so you can restore them quickly

### Do I really need to restart my phone after setup?

Yes. This step is **critical** and often skipped. After entering or changing APN settings:

1. Save the new APN
2. Select it as default
3. **Completely power off** your phone (not just sleep)
4. Wait 30 seconds
5. Power back on
6. Wait 2-3 minutes for network registration

Many users skip the restart and wonder why settings don't take effect. The modem needs to reinitialize with the new configuration.

### Why is my Fizz mobile hotspot connected but has no internet?

This is usually due to the APN Type. Go back to your APN settings and add `,dun` to the end of the APN Type field so it reads: `default,mms,supl,dun`. If your phone doesn't allow editing the APN Type, try adding `dun` in capital letters or create a completely new APN profile.

### Why am I not receiving verification codes (2FA) from banks?

First, ensure your SMSC number is correct (usually +14385200092 or +15144240053). If that doesn't work, try adding a small amount of funds (e.g., $5) to your Fizz Wallet. Some automated systems perceive 2FA texts as "premium" messages, and the system blocks them if your wallet balance is $0.00, even if you have unlimited texting.

### What does "Fizz EXT" mean and will I be charged for roaming?

Fizz EXT means you are connected to a partner network (like Rogers or Bell/Telus towers) because the main Fizz signal is weak. You will not be charged extra as long as your plan covers the region (e.g., Canada-wide). However, usage on Fizz EXT is meant for occasional travel; permanent usage may lead to service restrictions.

### Do I need to change my APN settings for USA roaming?

No. You use the exact same `mobile.bm` settings in the USA. If data isn't working, ensure:

1. Your **Data Roaming** toggle is ON in your phone settings.
2. You have a **Canada + USA plan** or an active **Travel Add-on**.

### How do I set up Visual Voicemail on Android vs. iPhone?

On iPhone, it is built into the native Phone app. On Android, you must download the specific **Fizz | Visual Voicemail** app from the Google Play Store. It will not work in the native Samsung or Pixel phone dialer.

---

## Save on Your Fizz Plan

Setting up your new Fizz plan? Don't forget to use referral code **HN9SM** at checkout to save up to **$40** on your first months. Both you and the person who referred you get a bonus—it's a win-win.

Referral bonuses are applied after your second payment, so stick around and enjoy the savings!

---

## Related Articles

- [Fizz VoLTE Emergency Calls Fix](/blog/fizz-volte-emergency-calls-fix) - Phone showing "Emergency calls only"?
- [Fizz vs Public Mobile Comparison](/blog/fizz-vs-public-mobile-comparison) - Thinking of switching?
- [Fizz My Rewards Level Up Guide](/blog/fizz-my-rewards-level-up-guide) - Maximize your perks
