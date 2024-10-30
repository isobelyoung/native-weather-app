# Frontend Task

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
</p>

## Instructions

### What to build

You are building a minimal weather app.

At a minimum the app should have a single button. Pressing this button should call a [firebase cloud function](https://firebase.google.com/docs/functions).
The firebase function is already implemented, you only need to call this from the app.


After clicking the button, the app should show the current temperature in London.

Any packages you choose to add will need to be motivated, make sure to include strong reasoning for why you chose to add any third party library.

### Example
Here is an example of how the App could look: [Figma Prototype](https://www.figma.com/proto/wZ16lZpnhJmgYh3LJ0AihI/Interview-Task?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2). Some assets are included in `/app/assets/weather-images/`.

### Advanced
Feel free to expand on the app's functionality and design, as long as you meet the MVP requirements shown in the prototype in the example section.
Show us what you can do.


### 🚀 How to run
- Create a firebase project (don’t worry, it is free) [Firebase Console](https://console.firebase.google.com/)
- Install the firebase [cli](https://firebase.google.com/docs/cli)
- Log in to your google account you created the project with using `firebase login`
- Run `firebase projects:list`yy
- Copy the `project-id` of the project you created.
- Run `firebase use --add project-id`
- Go to `app/firebase.js` and change the `firebaseConfig` to that of the firebase project you just created. You can find this in the project settings in the Firebase console.
- To start the app, run `npm install`, `npm run ios` or `npm run android` from the `/app` folder
- To start the local emulator, run `npm install`, `npm run serve` from the `/functions` folder


### From the Dev

Hi, fancy seeing you here!

I've set up the application as per the specifications outlined above, with a few little embellishments - navigation and global state context.

Normally for an app of this size, I acknowledge they would not be necessary but I wanted to try apply a modular approach which meant storing the data fetched from the API somewhere. To avoid prop drilling, I thought it best to use Redux as it's a pattern I'm very familiar with and sets the app for future feature expansion.

I do realise that there are some habits coming through from primarily using TypeScript, and in a perfect world I'd have defined my types and/or interfaces in a better way. The setting of the data in redux is one that currently relies on everything being returned perfectly from the API.

With more time, I would also have ideally done some unit tests (I've used Jest before) and applied the appropriate error handling - but all in all for this task, I have focused on the happy path, and have not done any performance optimisations (eg. there may be some imports that could be removed - but in the interests of time, I'm keen to submit this as is).

Surpisingly, the biggest hurdle came from rendering images dynamically. I hacked a workaround together, but I did get stumped a little bit trying to do that effectively as the require(...) method requires a static input. I also got stuck trying to access the firebase function for a little while, until I realised I was overcomplicating the situation (a classic - thought it was a little funny).

Look forward to chatting soon otherwise, thanks!

### UI

![IMG_2938](https://github.com/user-attachments/assets/e70468a7-62a6-4b20-9e23-a76bad06cf92)
  
![IMG_2939](https://github.com/user-attachments/assets/41ab02bb-a16b-4a7b-8492-9e62ede0bd91)


