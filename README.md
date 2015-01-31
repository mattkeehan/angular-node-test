# Sky - Find & Watch Team Test

## Testing

``mocha``

## Running

``node main``

## Environment

Built using node 0.10.33 on Windows

## Notes

I've built it very minimally, to fulfil only the stated requirements. Tried to keep all business logic to the backend, so the only (mocha) unit tests are there too. Karma could otherwise be used for front end testing.

I keep  my code as simple as possible until there's a reason not to, but changes I would expect to make soon if I continued would be: View over https; record auth attempts using a middleware on the login route; add some nice frontend default styling; improve the auth attempts json feed view (probably restructure on the backend so the frontend could still view it naively); add casperjs frontend end-to-end testing.

![alt text](https://github.com/sky-guide/angular-node-test/blob/master/it-compiles.png "It Compiles!")

## Requirements

Create an angular app which allows a user to enter a username and password and authenticate. Successful authentication should provide the user with a logged-in page and the ability to log out.

Create a NodeJS app which provides an authentication API to your angular app. The usernames 'user', 'manager', 'admin', 'developer', 'tester', with the password 'password' should be authenticated. All other combinations should fail. Eg, username 'john.smith' can never authenticate. 

Usernames should be case-insensitive, passwords should be case-sensitive.

Authentication attempts should be recorded (preferably in a Mongo database, although any other persistence of your choice is acceptable), with the following data:
  *	IP
  *	Datetime (unix timestamp format)
  *	Action (should be one of AUTH_SUCCESS or AUTH_FAILURE)
  *	Username

Expose a JSON feed of the authentication data to authenticated admin users only.
