# `Alert-V`

`Alert-V` React native custom alert with typescript support and cross-platform.

## Props

| Prop                 | Type      | Default    | Note                                     |
|----------------------|-----------|------------|------------------------------------------|
| `title`              | `string`  | (Required) | Title for alert.                         |
| `subTitle`           | `string`  |            | Sub title for alert.                     |
| `cancelButtonTitle`  | `string`  |            | Cancel button text                       |
| `confirmButtonTitle` | `string`  |            | Confirm button text                      |
| `showAlert`          | `boolean` |            | For showing the alert.                   |
| `singleButton`       | `boolean` | false      | For only cancel button show.             |
| `backdropPress`      | `boolean` | false      | closing modal when pressing the outside. |

## Styles

| Prop               | Type        | Note |
|--------------------|-------------|------|
| `textWrapperStyle` | `ViewStyle` |      |
| `subTitleStyle`    | `TextStyle` |      |
| `cancelStyle`      | `TextStyle` |      |
| `confirmStyle`     | `TextStyle` |      |
| `titleStyle`       | `TextStyle` |      |

## Methods

| Method Name      | Arguments       | Notes |
|------------------|-----------------|-------|
| `confirmOnPress` | `callback`      |       |
| `cancelOnPress`  | `callback`      |       |
| `setShowAlert`   | `show: boolean` |       |