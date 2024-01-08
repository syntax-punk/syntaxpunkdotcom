---
title: 'Creating a virtual environment in Python'
date: '2024-01-08'
short: "A quick guide to creating a virtual environment in Python"
hashtags: "python,venv,dev"
---

## **Project Isolation** {.hero-margin}

As a Python developer, you might have come across the term 'virtual environment', especially the **venv** module. But what exactly is it, and why is it such a big deal?

Imagine yourself coding a complex application that requires a range of libraries. However, your development environment is shared among various projects, each with its unique dependencies. This situation parallels working on several Python projects on the same machine. Each project may need different library versions. Without careful management, these varying requirements can lead to conflicts and compatibility issues, disrupting the smooth functioning of your applications.{.margin1}

Python `venv`{.codeword} is for the rescue! It creates a virtual environment — a self-contained directory that houses all the necessary libraries and versions needed for a specific project.`venv`{.codeword } was introduced in Python 3.3. Therefore, the minimal Python version required to use venv is Python 3.3. This means that if you're using any version of Python older than 3.3, you're all set.{.marginTop1}

{.marginHalf}

To create an environment, first, open your **terminal**, navigate to the project directory and run the following command:

```bash
  python3 -m venv my_venv
```

After creating the virtual environment, you can activate it with:

```bash
  # On Unix or MacOS
  source myenv/bin/activate

  # On Windows
  myenv\Scripts\activate
```

Once the environment is activated, you can install the required libraries using `pip`{.codeword} without worrying about affecting other projects:

```bash
  pip install <package-name>
```

Further, when environment is no longer needed, you can deactivate it with:

```bash
  deactivate
```

{.marginHalf}

Here is a list of main benefits of using venv in your next Python project:

- Harmony in Dependency Management: With venv, each project gets its own set of libraries, so there’s no risk of one project's requirements interfering with another's. It's like having separate pantries for each chef.

- Consistency Across the Board: When multiple developers work on the same project, venv ensures that everyone is using the same environment. This is crucial for replicating bugs and testing, akin to having a standardized recipe.

- Protect Your System: Using venv safeguards your system-wide Python from accidental changes. It's like making sure that experimenting with a new dish doesn’t end up accidentally setting the kitchen on fire.

- Ease of Project Management: Imagine being able to pack up your entire kitchen and hand it over to another chef. That's what you can do with venv — freeze your project's state and share it, ensuring everyone has the same setup.

- Streamlined Deployment: If your project works in the virtual environment, it’s more likely to work seamlessly in other environments too. This reduces deployment headaches significantly.

- A Safe Playground for Experimentation: Want to try out a new library or update a package? venv lets you do this without the fear of affecting your other projects.

Happy coding! {.margin2}