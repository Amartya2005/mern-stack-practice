# MERN Deployment Checklist

Before releasing:
- [ ] Set production environment variables securely.
- [ ] Confirm the database is not publicly exposed without controls.
- [ ] Restrict CORS to intended origins.
- [ ] Enable HTTPS at the edge or hosting platform.
- [ ] Validate inputs and enforce server-side authorization.
- [ ] Confirm secrets and local environment files are not tracked.
- [ ] Add safe error handling and useful logs.
- [ ] Test the production build and API routes.
- [ ] Configure backups and understand how restoration works.
- [ ] Document rollback steps and verify health checks.

A successful local run is only the beginning of deployment readiness.