# `Alert-V`

`Alert-V` is a versatile and customizable React Native component designed to display alerts with TypeScript support. It
is a cross-platform solution that provides a seamless user experience for both iOS and Android applications. With
Alert-V, you can create alerts with various styles and functionalities tailored to your app's needs.

## Features

* <b>Customizable Alerts:</b> Easily customize the title, subtitle, and button texts to match your app's design and
  requirements.
* <b>Single or Double Button Options:</b> Choose between showing a single cancel button or both cancel and confirm
  buttons.
* <b>Backdrop Press Handling:</b> Configure whether the alert should close when the user presses outside the modal.
* <b>Styling Flexibility:</b> Apply custom styles to various components of the alert, such as the modal, container, text
  wrapper, title, subtitle, and buttons.

## Usage

`Alert-V` is straightforward to integrate into your React Native project. By utilizing the provided props and methods,
you
can display alerts dynamically based on user actions or app events.

Here is a simple code below, for its usage.

```jsx
import {AlertProvider, AlertV} from "alert-v"

const App = () => {

    const handleAlertPress = () => {
        AlertV.show({
            title: "My custom title", // required
            titleStyle: {color: "white"}, // optional
            subTitle: "You can add here detailed explanation of something", // optional
            subTitleStyle: {color: "white"}, // optional
            confirmOnPress: () => console.log("Confirmed"),
            cancelOnPress: () => console.log("Cancelled"), // required
            cancelButtonTitle: "Cancel", // optional
            confirmButtonTitle: "Agree", // optional
            cancelStyle: {color: "red"}, // optional
            confirmStyle: {color: "green"}, // optional
            backdropPress: false, // outside click doesn't close the modal
            singleButton: false, // shows only one button ( cancelOnPress )
            containerStyle: {backgroundColor: "grey"},
            modalTransparencyStyle: {backgroundColor: "red"},
            textWrapperStyle: {backgroundColor: "red"}, // title and subtitle view container styles
        })
    }

    return (
        <AlertProvider>
            <Button title="Open Alert" onPress={handleAlertPress} />
            {/* ... your other components here */}
        </AlertProvider>
    )
}

export default App

```

### NOTE!

You should wrap your main file (App.js/ts) with `AlertProvider` and use the `AlertV` object and call its `show` method
wherever you want in your project.

## Props

| Prop                 | Type      | Default    | Note                                     |
|----------------------|-----------|------------|------------------------------------------|
| `title`              | `string`  | (Required) | Title for alert.                         |
| `subTitle`           | `string`  |            | Sub title for alert.                     |
| `cancelButtonTitle`  | `string`  |            | Cancel button text                       |
| `confirmButtonTitle` | `string`  |            | Confirm button text                      |
| `singleButton`       | `boolean` | false      | For only cancel button show.             |
| `backdropPress`      | `boolean` | false      | closing modal when pressing the outside. |

## Styles

| Prop                     | Type        | Note                                 |
|--------------------------|-------------|--------------------------------------|
| `modalTransparencyStyle` | `ViewStyle` | `Give style to your modal`           |
| `containerStyle`         | `ViewStyle` | `Main container styles`              |
| `textWrapperStyle`       | `ViewStyle` | `Title and subtitle container style` |
| `subTitleStyle`          | `TextStyle` | `Sub title text style`               |
| `cancelStyle`            | `TextStyle` | `Cancel button text style`           |
| `confirmStyle`           | `TextStyle` | `Confirm button text style`          |
| `titleStyle`             | `TextStyle` | `Title text style`                   |

## Methods

| Method Name      | Arguments  | Default      | Note                                 |
|------------------|------------|--------------|--------------------------------------|
| `cancelOnPress`  | `callback` | `(Required)` | `Callback for cancel button press.`  |
| `confirmOnPress` | `callback` |              | `Callback for confirm button press.` |

## Gif example

![example image](assets/image/AlertGif)
