### Steps to set up and run locally from CLI console

- `git clone https://github.com/danitasheva/openhouse.git`
- `npm install`
- `npm run dev`
- Navigate to `http://localhost:3000` in browser

### Notes

The code in GitHub is not fully functional because of some CORS errors which I encountered. In order to work around those errors, I put a `proxy` declaration in my `package.json` file. This is a temporary solution which I only used to complete the task. The proper way to fix that is to configure the server side so the response includes an `Access-Control-Allow-Origin` header.

In order to have something more or less functional, I hard-coded the API responses and deployed that version to AWS Amplify at [https://development.dtolb9yev29n.amplifyapp.com/](https://development.dtolb9yev29n.amplifyapp.com/).

For code review, please use the `main` branch from [https://github.com/danitasheva/openhouse.git](https://github.com/danitasheva/openhouse.git).

### The things I would have done if I had more time

- Refactor to improve the file and folder structure
- Add a dropdown to select communities by groups
- Add and use the React Router DOM library to display a dedicated page for each community, with homes located in that community
- Write unit tests with Jest and React Testing Library
