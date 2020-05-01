# Country-Stats

- [Project Planning](#Project-Planning)
  - [Overview](#Overview)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [Goals](#Goals)
    - [Libraries](#Libraries)
    - [Data](#Data)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
    - [Helper Functions](#Helper-Functions)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

## Project Planning

<br>

### Overview

**Country Stats** is an informative app. User will be able to select which county they wish to learn about. Some details include: name, region, language, currency, etc. The list of countries will be in alphabetical order. User may go through the list or search for a specific country.

<br>

### Wireframes

- Mobile
  ![alt text](src/Assets/Wireframes/Mobile.png)

- Tablet
  ![alt text](src/Assets/Wireframes/Tablet.png)

- Desktop
  ![alt text](src/Assets/Wireframes/Desktop.png)

<br>

### MVP

_The **Country Stats** MVP will focus on letting users have an easily interactive product. Whether on a phone, tablet, or desktop, user will be able to navigate through the application and find the information they require. I will be aiming to achieve the following goals:_

#### Goals

- _Successfully import data from the API._
- _Utilize the data and implement it in a format based on the respective layout._
  - _Allow user to search for the specified country._
    - _Display the data of the country searched._
  - _Allow user to scroll through the countries on smaller devices._
    - _Display the data of selected country._
  - _Display a list of the countries on desktop mode._
    - _Link the country name to its respective data._

<br>

#### Libraries

|   Library    | Description                                         |
| :----------: | :-------------------------------------------------- |
| React Router | _Will be used to link countries to its data._       |
|  Story Book  | _Will be used to create buttons, search bars, etc._ |
|    Axios     | _Will be used to get data from API._                |

<br>

#### Data

|       API        | Quality Docs? | Website            | Sample Query                                              |
| :--------------: | :-----------: | :----------------- | :-------------------------------------------------------- |
| Rest Country API |      Yes      | _restcountries.eu_ | _https://restcountries.eu/rest/v2/name/usa?fullText=true_ |

<br>

#### Component Hierarchy

```
src
|__ Components
      |__ App
            |__ App.css
            |__ App.js
      |__ CountryData
            |__ CountryData.css
            |__ CountryData.js
      |__ Description
            |__ Description.css
            |__ Description.js
      |__ DesktopCountryList
            |__ DesktopCountryList.css
            |__ DesktopCountryList.js
      |__ DesktopData
            |__ DesktopData.css
            |__ DesktopData.js
        |__ HomeButton
              |__ Home.stories.js
              |__ HomeButton.css
              |__ HomeButton.js
      |__ Header
            |__ Header.css
            |__ Header.js
        |__ CC
              |__ CC.css
              |__ CC.js
              |__ CC.stories.js
      |__ ScrollBar
            |__ ScrollBar.css
            |__ ScrollBar.js
            |__ ScrollBar.stories.js
      |__ SearchBar
            |__ SearchBar.css
            |__ SearchBar.js
            |__ SearchBar.stories.js
        |__ SearchButton
              |__ Button.css
              |__ Button.js
      |__ UpButton
            |__ UpButton.css
            |__ UpButton.js
            |__ UpButton.stories.js


```

<br>

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                             |
| :----------: | :--------: | :---: | :---: | :---------------------------------------------------------------------- |
|     App      | functional |   n   |   n   | _The App will be my main component._                                    |
| CountryData  | functional |   y   |   y   | _The CountryData will display the country information._                 |
| CountryList  | functional |   y   |   y   | _The CountryList will display a list of countries linked to data._      |
| Description  | functional |   n   |   n   | _The Description will display the description of the product._          |
|    Header    | functional |   n   |   n   | _The Header will contain the logo/title and a link._                    |
|  ScrollBar   | functional |   y   |   y   | _The ScrollBar will contain a scrollable list of countries._            |
|  SearchBar   | functional |   y   |   y   | _The SearchBar will allow user to search for countries._                |
| SearchButton | functional |   y   |   y   | _The SearchButton will be used with the SearchBar to search countries._ |
|   Stories    | functional |   n   |   y   | _The Stories will be used to set up the components._                    |

<br>

#### Component Estimates

| Task                 | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------- | :------: | :------------: | :-----------: | :---------: |
| App                  |    H     |      2 hr      |     2 hrs     |    2 hrs    |
| CountryData          |    H     |     6 hrs      |     5 hrs     |    5 hrs    |
| CountryList          |    H     |     6 hrs      |     3 hrs     |    3 hrs    |
| Description          |    L     |     .5 hr      |    .5 hrs     |   .5 hrs    |
| Header               |    H     |     2 hrs      |     1 hr      |    1 hr     |
| ScrollBar            |    H     |     6 hrs      |     6 hrs     |    6 hrs    |
| SearchBar            |    H     |     6 hrs      |     5 hrs     |    5 hrs    |
| SearchButton         |    H     |    2.5 hrs     |     4 hrs     |    4 hrs    |
| Stories              |    M     |    2.5 hrs     |     2 hrs     |    2 hrs    |
| CSS                  |    L     |    4.5 hrs     |     3 hrs     |    3 hrs    |
| Unexpected Debugging |    L     |     2 hrs      |    .5 hrs     |   .5 hrs    |
| TOTAL                |          |     40 hrs     |    32 hrs     |   32 hrs    |

<br>

### Post-MVP

- _Add maps to each countries using a second source._
- _Link my Project 1 (Currency Converter) into this project._

<br>

#### Helper Functions

> Use this section to document all helper functions– generic functions that can be reused in other applications.

|   Function   | Description                                  |
| :----------: | :------------------------------------------- |
| .toLowerCase | _Makes letters in the word all lower cased._ |
|    .join     | _Joins words._                               |
|     Find     | _Found the word needed._                     |

<br>
