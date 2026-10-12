# CORS

Cross-Origin Resource Sharing controls which browser origins may read responses from an API. It is not authentication and does not stop non-browser clients from calling the server.

- Allow only expected frontend origins in production.
- Configure methods and headers intentionally.
- Enable credentials only when required and never combine credentialed requests with a wildcard origin.
- Keep authentication and authorization checks regardless of CORS settings.

Test local and deployed origins separately because their URLs often differ.