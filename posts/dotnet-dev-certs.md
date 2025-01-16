---
title: '.NET development certificates'
date: '2025-01-16'
short: "Create self-signed certificates in you .NET Core development environment"
hashtags: "tech,.net,security"
---

Hey! It's been a minute since I last wrote something here. Let's talk about serving your `.NET Core` application over `HTTPS` in your local development environment.

{.marginHalf}

**Why?**

{.marginHalf}

Well, when developing a web application with `.NET Core` you might want to test your application with `HTTPS` locally for various reasons. For example you might want to test how the application actually works with `HTTPS`, or test security features that require `HTTPS`, like service workers or geolocation or even 3rd party APIs.

{.marginHalf}

**Convinced?**

{.marginHalf}

Good.

After creating a webapi project and adding it into your solution navigate to your solution with your favorite terminal and run the following command:

```bash
dotnet dev-certs https --trust
```

This command will create a self-signed certificate and trust it on your machine. If you get a permission error, try running the command with `sudo` or as an administrator. 

{.marginHalf}

Two more useful commands to keep in mind:

```bash
dotnet dev-certs https --check # checks if a certificate is installed

dotnet dev-certs https --clean # removes the certificate
```

Don't forget theses are `self-signed development`{.codeword} cerificates, meaning that they will not work properly in your `prod` environment. 

{.marginHalf}

And that's it. Now you can run your application and access it over `HTTPS`, but first make sure adding a `HTTPS` application URL in your launch settings _(example below)_ and you're good to go.

```json
{
  "$schema": "https://json.schemastore.org/launchsettings.json",
  "profiles": {
    "http": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "launchBrowser": false,
      "applicationUrl": "http://localhost:5000;https://localhost:5001",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    }
  }
}
```

Have a great one! {.margin2}