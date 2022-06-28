# TODO

- [x] Complete UniversalForm

- [x] Reskin and Populate CrossFit Decimate

- [ ] Build Course App as Feature Branch

        - [x] Sun And Moon
        - [x] Lightbox Using Context
        - [x] Adding Redux State
        - [x] MongoDB
        - [x] Authentication/Session
        - [x] UniversalForm handle API calls
        - [x] Redux Preloaded State
        - [x] Order Flow
        - [x] Date Time on Order History
        - [x] Order Flow: Flag Order Placed, Clear Cart Items, Show Thank You Page, disable Payment and Review.
        - [x] User Account Update and Password Update
        - [x] User Periodic Access Check - logout actions
        - [x] Mailtrap: Contact and Purchase Thanks Forms
        - [x] Redirect to user chosen page when authenticating
        - [x] Sun And Moon refactor to Binary
        - [x] Test Sample Data for Forms
        - [x] Contact Form
        - [x] Reorganize Layout and Pages, etc
        - [x] Staff Lightbox: Add mroe details in pop up.
        - [ ] Cart: Item Profile Page
        - [ ] Universal Forms - Fix Error handling
        - [ ] Universal Forms - Publish and Yarn Add
        - [ ] Unit Tests
        - [ ] Mail: Wire up to SendGrid for live emails - FREE version

- [ ] Comprehensive Hollowed Out Express Endpoints put into initial course setup


## State

```js
{
    user: {
        loggedIn: true,
        profile: {},
    },
    products: [],
    cart: {
        items: [{qty, product}]
        payment: {},
        orderPlaced: false,
        flow: [],
    }
}

```

## Session Management

1. User Logs in
   * Session is updated with userID - giving access to authenticated api routes
   * Redux store updates with `userLoggedIn: true` and populates `profile` with `user object`
2. Interface updates based on Redux Store
3. User Logs Out
   * Session is destroyed
   * Redux Store updates with `userLoggedIn: false` and empties `profile` object

