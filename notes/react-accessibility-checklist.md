# React Accessibility Checklist

Accessible interfaces work with keyboards, screen readers, zoom, and varied input methods.

## Checklist
- Use semantic HTML elements before custom widgets.
- Give every form control a programmatic label.
- Make all interactive features keyboard accessible with visible focus.
- Use buttons for actions and links for navigation.
- Provide useful alternative text for meaningful images; use empty alt text for decorative images.
- Associate validation errors with their fields and announce important status changes.
- Preserve sufficient contrast and avoid communicating meaning through color alone.
- Manage focus when opening dialogs and return it when they close.

Test with keyboard-only navigation and automated checks, then verify important flows manually. ARIA can help, but incorrect ARIA often makes things worse.