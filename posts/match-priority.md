---
title: 'A Match position priority'
date: '2023-10-24'
short: "A quick guide to sorting based on position of the input match"
hashtags: "javascript,sorting,dev"
---

## **Problem** {.margin1}

When creating an input suggestion feature for any kind of locations, names, brands, you name it; a user expects us to prioritize those values which **"start"** with the user's input over those items that simply contain the keyword elsewhere and thus have them listed higher in the suggestions list. Let's look into a practical way of achieving that.

```javascript
// Consider given list of city names:

const cityNames = [
  "Dystopya",
  "Crispy Corners",
  "Pyongyang",
  "Pylontropolis",
  "Pyramida",
  "Happytown",
  "Sleepy Hollow",
  "Pylonville",
  "Empyreal Heights"
];
```

Now, imagine a user starts typing `py`{.codeword} in a search box. They are likely looking for cities that start with "py". However, with a simple match finding technique, based on the presence of the keyword `py`{.codeword }, we might get the following results:

```bash
  Happytown
  Sleepy Hollow
  Pyongyang
  Pylontropolis
  Pyramida
  Dystopya
  Crispy Corners
  Pylonville
  Empyreal Heights
```

You can see that **"Happytown"** and **"Sleepy Hollow"** are at the top, even though the `keyword` ("py") is in the middle of these city names. Intuitively, users would expect cities starting with "py" to be prioritized over others.

Hence, the aim is to refine the search logic to give priority to city names that start with the user's input (like "Pylontropolis", "Pylonville", "Pyongyang" and so on) over city names where the user's input appears later in the string (like "Happytown" or "Sleepy Hollow").

By using the combination of `filter`{.codeword} and `includes`{codeword}, and then sorting the results, we ensure that:

 - Cities that start with "py" are shown first.
 - Cities where "py" appears later are shown after, and they are also sorted alphabetically.

This provides a more intuitive and user-friendly search experience.

## **The City Suggestion Function** {.margin1}

```javascript
// Function to get city suggestions based on user input
function getCitySuggestions(input) {
  // Filter city names based on the input
  let matches = cityNames
    .filter(city => city.toLowerCase().includes(input.toLowerCase()));

  // Sort the matches: prioritize based on the position of the match, 
  // and then alphabetically
  matches.sort((a, b) => {
    const indexA = a.toLowerCase().indexOf(input.toLowerCase());
    const indexB = b.toLowerCase().indexOf(input.toLowerCase());

    if (indexA < indexB) return -1;
    if (indexA > indexB) return 1;
    
    // If the match position is the same, sort alphabetically
    return a.localeCompare(b);
  });

  return matches;
}
```

## **Let's Test It!** {.margin1}

Now if we call the function with the input `py`{.codeword} we get the following results:

```javascript
  const result = getCitySuggestions("py");
  console.log(result);

  // result:
  [
    "Pylontropolis",
    "Pylonville",
    "Pyongyang",
    "Pyramida",
    "Empyreal Heights",
    "Happytown",
    "Crispy Corners",
    "Sleepy Hollow",
    "Dystopya"
  ]
 
```

## **Wrap Up** {.margin1}

- Implemented a **city name suggestion function** that takes in a user input and returns a list of city names that match the input.
- The result is prioritized based on the **position of the input match** in the city name:
  - Cities with the input at the start are listed first.
  - Then, cities with the input occurring later.
- Further sorting is done alphabetically if multiple city names have the input string at the same position.