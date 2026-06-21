# SpinCity — Design Guidelines

## Brand Identity
- **App Name**: SpinCity
- **Tagline**: Find your home. Build your hustle.
- **Category**: Social networking / community platform

## Color Palette
- **Primary**: Vivid Orange — #FF6B2B (energy, warmth, entrepreneurial spirit)
- **Secondary**: Deep Purple — #7C3AED (creativity, ambition)
- **Accent**: Vibrant Teal — #0EA5E9 (community, connection, freshness)
- **Background**: Near-white — #F9F9FB (clean, airy, modern)
- **Surface / Card**: White — #FFFFFF
- **Text Primary**: Deep Charcoal — #1A1A2E
- **Text Secondary**: Muted Grey — #6B7280

## Typography
- **Headings**: Poppins or Inter, Bold/SemiBold — confident and modern
- **Body**: Inter, Regular/Medium — clean and readable
- **Accent / Labels**: Inter, SemiBold — punchy call-to-actions

## Elevation & Depth
- Cards have a subtle box-shadow (0 2px 12px rgba(0,0,0,0.07)) for a lifted, airy feel
- Feed cards use rounded corners (radius 16px) — friendly, approachable
- Profile strip has a soft gradient overlay on left/right edges to indicate scrollability

## Key Components

### Profile Strip (Right-to-Left Auto-Scroll)
- Horizontal strip at the top of the feed, above content cards
- Circular avatar thumbnails (48–56px) with username label beneath
- Flows right to left automatically, smooth and continuous (CSS marquee / animation)
- Gradient fade on both edges for a polished look
- Tap/click pauses scroll; "Follow" appears on hover

### Content Cards (Feed)
- Avatar + name + timestamp header
- Rich post body (text + optional image placeholder)
- Engagement bar: Like, Comment, Share, Bookmark counts
- Vibrant category tag chips (orange / purple / teal variants)
- Cards are colorfully varied — alternate subtle tinted backgrounds (peach, lavender, mint) to keep the feed visually lively

### Post Composer
- Prominent, inviting CTA at top of feed — "What's happening in your city?"
- Avatar + text input + media + post button in teal/orange

### Navigation
- Top navbar: SpinCity logo (left), search, notifications, profile (right)
- Clean, minimal — doesn't compete with the vibrant feed

## Motion & Interaction
- Profile strip: continuous right-to-left CSS animation, pauses on hover
- Card hover: subtle lift (translateY -2px) with shadow deepening
- Buttons: spring micro-animation on press
- Overall feel: energetic but not overwhelming — celebration of community

## Accessibility
- All color combinations meet WCAG AA contrast
- Focus rings on interactive elements
- Reduced-motion fallback for the auto-scrolling strip