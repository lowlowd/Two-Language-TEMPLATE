---
publishDate: 2025-11-23T00:00:00Z
title: 'Fizz Modem Bridge Mode Setup Guide'
excerpt: 'Step-by-step guide to enable bridge mode on your Fizz modem. Connect your own router, Eero, or mesh system. Includes cusadmin login and CODA-4680 instructions.'
image: ~/assets/images/blog/fizz-modem-bridge-mode-setup.png
category: Home Internet
tags:
  - fizz bridge mode
  - fizz modem setup
  - coda-4680 bridge mode
  - fizz internet router
  - cusadmin password
author: Sarah Rodriguez
---

## Why Put Your Fizz Modem in Bridge Mode?

The modem Fizz ships you—usually a CODA-4680 or CODA-5610Q—is fine. It works. It does the job.

But "fine" isn't why you're here.

Maybe the Wi-Fi doesn't reach your bedroom. Maybe you've got an Eero mesh system gathering dust. Maybe you just want full control. Been there.

**Bridge mode** turns your Fizz modem into a dumb pipe. It handles the internet connection, but YOUR router takes over everything else—Wi-Fi, network management, all of it. Here's how to do it, step by step.

---

## What You'll Need

Before diving in, make sure you have:

- ✅ Your Fizz internet service activated and working
- ✅ A computer or phone connected to the Fizz modem's network
- ✅ Your own router (Eero, Google Nest, TP-Link, ASUS, etc.)
- ✅ An Ethernet cable to connect your router to the Fizz modem
- ✅ About 15 minutes of patience

> **Setting up new internet?** Use referral code **HN9SM** to get a **$40 bonus** on your account.

---

## Step 1: Log Into Your Fizz Modem

First, you need to access the modem's admin interface.

### Find the Login Page

1. Connect to your Fizz Wi-Fi or plug an Ethernet cable directly into the modem
2. Open a web browser
3. Go to **192.168.0.1** (or sometimes **10.0.0.1**)
4. You should see the Hitron login page

### The Credential Confusion

Okay, this is where everyone gets stuck. Myself included, the first time.

There are TWO sets of credentials:

| Login Type      | Username | Password                                      |
| --------------- | -------- | --------------------------------------------- |
| **Admin Login** | cusadmin | Your Wi-Fi password (check the modem sticker) |
| **Basic Login** | cususer  | (varies)                                      |

**Use cusadmin.** That's the one with full access. The password is whatever's printed on the modem’s sticker—unless you changed it.

> **Can't get in?** Try the default sticker password first. If that fails, factory reset is your nuclear option (hold the reset button 30 seconds). Fair warning: it nukes all your settings.

---

## Step 2: Navigate to Gateway Settings

Once logged in:

1. Look for **General** in the left menu
2. Click on **Gateway** or **Gateway Function**
3. You'll see options for the residential gateway mode

Different firmware versions may have slightly different layouts, but the path is usually:

```
General → Gateway → Residential Gateway Function
```

---

## Step 3: Disable Residential Gateway Function

Here's the magic moment:

1. Find **Residential Gateway Function**
2. Change it from **Enabled** to **Disabled**
3. Click **Apply** or **Save**

The modem will reboot itself. Takes 2-3 minutes. Lights will blink. Internet disappears. Don't panic. This is normal.

> **What actually happens:**
>
> - Modem's built-in Wi-Fi: OFF
> - Modem's DHCP server: OFF
> - Modem's firewall/NAT: OFF
> - Only Ethernet port 1 passes internet to your router

The modem is now a dumb pipe. Beautiful.

---

## Step 4: Connect Your Own Router

Now hook up your personal router:

1. **Unplug your router** (if currently connected to anything)
2. Connect an Ethernet cable from the **Fizz modem's Ethernet port 1** to your router's **WAN/Internet port**
3. Power on your router
4. Wait 2-3 minutes for everything to establish a connection

Your router should now get a public IP address directly from Fizz (or close to it), and YOU control the network.

---

## Specific Router Setup Tips

### Connecting Eero to Fizz Modem

1. Put Fizz modem in bridge mode (steps above)
2. Connect Eero gateway to Fizz modem Ethernet port 1
3. Open Eero app and run through setup
4. Eero will detect the internet connection automatically

### Connecting Google Nest WiFi

1. Put Fizz modem in bridge mode
2. Connect Nest router to Fizz modem
3. Google Home app will handle the rest

### Connecting ASUS/TP-Link/Netgear Routers

1. Put Fizz modem in bridge mode
2. Connect WAN port to Fizz modem
3. Access your router's admin page (usually 192.168.1.1)
4. Set WAN connection type to **DHCP** or **Automatic**

---

## Troubleshooting Common Issues

### Can't Access 192.168.0.1

- Make sure you're connected to the Fizz network (not your own router)
- Try **http://192.168.0.1** (with the http://)
- Disable VPN if running
- Try a different browser

### cusadmin Password Not Working

The password is case-sensitive. Try:

1. The password on your modem's sticker exactly as printed
2. "password" (some modems have this as default)
3. Factory reset if all else fails (hold reset button 30 seconds)

### No Internet After Bridge Mode

1. Confirm an Ethernet cable connects modem to your router's WAN port
2. Restart both modem and router (modem first, wait 2 min, then router)
3. Check that your router is set to obtain IP automatically (DHCP)

### Speed is Slower After Bridge Mode

This shouldn't happen. If it does, troubleshoot:

- **Double-NAT trap:** Did you connect to LAN instead of WAN port? Classic mistake.
- **Router bottleneck:** Older routers might not handle Fizz's speeds. Check your router's specs.
- **Wiring issue:** Run a speed test with a device directly connected to the modem (before your router). If that's slow, check your [APN and network settings](/blog/fizz-apn-mms-settings-guide) or contact support.

---

## CODA-4680 vs CODA-5610Q: Any Differences?

Both modems follow the same bridge mode process:

| Model      | Max Speed | Bridge Mode           |
| ---------- | --------- | --------------------- |
| CODA-4680  | ~1 Gbps   | Same process as above |
| CODA-5610Q | 2.5 Gbps  | Same process as above |

The 5610Q is newer and supports multi-gig connections if you have a compatible Fizz plan. Bridge mode works identically on both.

---

## Reverting Back to Normal Mode

Changed your mind? Here's how to undo bridge mode:

1. Connect directly to the Fizz modem via Ethernet
2. Go to **192.168.0.1**
3. Log in with **cusadmin**
4. Navigate to General → Gateway
5. **Enable** Residential Gateway Function
6. Save and reboot

The modem will restart with its built-in Wi-Fi and DHCP back on.

---

## Fizz VIP Installation vs Self-Install: Is It Worth $60?

Before you even get to bridge mode, you need internet installed. Fizz offers two options:

### Self-Installation (Free)

- Fizz ships the modem to your address
- You connect it yourself to an existing coax outlet
- Activate online through your Fizz account
- **Best for:** Homes with existing Vidéotron/cable infrastructure

### VIP Installation ($60)

A technician comes to your home and:

- Connects the modem
- Verifies signal quality
- Runs new coax if needed
- Troubleshoots any issues on-site

**Is Fizz VIP installation worth it?** Here's when to pay the $60:

| Situation                           | Self-Install OK?          | VIP Worth It? |
| ----------------------------------- | ------------------------- | ------------- |
| Active Vidéotron outlet exists      | ✅ Yes                    | ❌ No         |
| Previous cable internet worked here | ✅ Yes                    | ❌ No         |
| New construction, no coax run       | ❌ No                     | ✅ Yes        |
| Old building, unknown wiring        | ⚠️ Maybe                  | ✅ Probably   |
| Coax outlet exists but never tested | ⚠️ Try self-install first | ✅ If fails   |

### Fizz Coax Cable Requirement

Fizz internet requires a **coaxial cable connection** (the same type used for cable TV). If your home only has fiber or DSL infrastructure, Fizz won't work without new wiring.

**How to check:**

1. Look for round coax outlets on your walls (similar to TV cable)
2. Check if you had Vidéotron, Cogeco, or cable TV service before
3. The modem won't activate without a proper coax signal

---

## Moving with Fizz Internet: Relocation Costs

Moving to a new address? Here's what to expect:

### Fizz Move Internet Fee

- **Self-install at new location:** Free (if you keep same modem)
- **VIP installation at new address:** $60
- **Address change fee:** Free

### Fizz Internet Relocation Process

1. Log into [fizz.ca](https://fizz.ca)
2. Go to **My Account** → **Move**
3. Enter your new address
4. Fizz checks if service is available
5. Choose self-install or VIP for new location
6. Take your modem with you (don't ship it back!)

**Pro tip:** Schedule your move date in advance. Fizz needs a few days to update your service address and ensure activation at the new location.

### What If Fizz Isn't Available at My New Address?

- Cancel without penalty (no contracts)
- Return the modem to avoid equipment charges
- You'll lose your accumulated My Rewards progress

## FAQ: Fizz Modem Bridge Mode

### What is bridge mode?

Bridge mode turns your modem into a simple pass-through device. It stops handling Wi-Fi, DHCP, and NAT, letting your own router take over those functions.

### How do I log into the modem after enabling bridge mode?

Once in bridge mode, the standard 192.168.0.1 address often stops working because the router function is off. You must usually use **192.168.100.1** to access the admin interface. If that doesn't work, you will need to factory reset the modem to regain access.

### Why are Ethernet ports 2, 3, and 4 not working?

In bridge mode, only **LAN Port 1** remains active to pass the public IP to your personal router. Ports 2, 3, and 4 are disabled. You must plug all your wired devices (PCs, consoles, switches) into your personal router, not the Fizz modem.

### Will the Fizz Wi-Fi app still work in bridge mode?

No. The Fizz Wi-Fi app relies on the modem's internal router to manage devices and pause usage. Once you enable bridge mode, the app will show an error or fail to connect. You must use your own router's app (e.g., Eero, Asus, Google Home) to manage your network.

### How do I disable bridge mode if I can't access the settings?

If you are locked out, perform a **Hardware Factory Reset**. Find the reset pinhole on the back (CODA-4680) or bottom (CODA-5610Q) of the modem. Hold the button down for **10-15 seconds** with a paperclip until the lights flash. This restores the modem to its original state with Wi-Fi enabled.

### Does bridge mode fix "Double NAT" for gaming?

Yes. If you use your own router without bridge mode, you create a "Double NAT" (Network Address Translation) which causes lag and connection issues in games (Xbox/PlayStation). Enabling bridge mode gives your router the public IP, resolving Double NAT instantly.

### Will bridge mode affect my Fizz bill?

No. It's a free configuration change that doesn't affect pricing.

---

## Save on Your Fizz Internet

Setting up a new Fizz home internet connection? Use referral code **HN9SM** when signing up to save up to **$40** on your first months!

---

## Related Articles

- [Fizz APN Settings Not Working?](/blog/fizz-apn-mms-settings-guide) - Fix mobile data and MMS issues
- [Fizz vs Public Mobile Comparison](/blog/fizz-vs-public-mobile-comparison) - Comparing budget carriers
- [Fizz My Rewards Level Up Guide](/blog/fizz-my-rewards-level-up-guide) - Maximize your perks
