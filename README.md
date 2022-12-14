# TimeCord — Timestamps for Discord

TimeCord is a [Node.js](https://node.js.org/) module that allows you to easily create timestamps!

## Installation

```bash
npm install timecord
```

```bash
yarn add timecord
```

>

## Basic usage

```js
const { DiscordTimestamp } = require('timecord');

const timestamp = new DiscordTimestamp();
console.log(timestamp.format()); // -> <t:xxxxxxx:f>
```

## Example

```js
const { Client } = require('discord.js');
const client = new Client(...);

const { DiscordTimestamp } = require('timecord');

client.on('interactionCreate', (interaction) => {
	if (interaction.isChatInputCommand() && interaction.commandName === 'test-timestamp') {
		const createdDate = new DiscordTimestamp(interaction.createdAt).format();
		return interaction.reply({
			content: `Interaction created date: ${createdDate}`
		});
		// -> content: `Interaction created date: <t:xxxxxxxx:f>`
	}
});
```

## Advanced example

```js
const { DiscordTimestamp, StyleType, TimeUnits } = require('timecord');

const timestamp = new DiscordTimestamp(new Date(), StyleType.RelativeTime);

console.log(`You will be able to use this command again ${timestamp.addTime(2, TimeUnits.Hours).format()}.`);
// -> You will be able to use this command again in 2 hours.
```

## Methods

| Method         | Parameters                                                                                                      | Description                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| addTime        | `amount`: number<br>`time`**?**: [TimeUnitResolvable](https://github.com/notbojji/timecord#types)               | Adds time to the timestamp.                                                               |
| subtractTime   | `amount`: number<br>`time`**?**: [TimeUnitResolvable](https://github.com/notbojji/timecord#types)               | Subtracts time to the timestamp.                                                          |
| resetTimestamp | none                                                                                                            | Resets the timestamp.                                                                     |
| setTimestamp   | `timestamp`: [TimestampResolvable](https://github.com/notbojji/timecord#types)<br>`style`**?**: StyleResolvable | Sets the timestamp.                                                                       |
| setStyle       | `style`: [StyleResolvable](https://github.com/notbojji/timecord#types)                                          | Sets the style.                                                                           |
| format         | `style`**?**: [StyleResolvable](https://github.com/notbojji/timecord#types)                                     | Formats the timestamp to a [TimestampResult](https://github.com/notbojji/timecord#types). |

## Types

| Name                | Type                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| TimestampResolvable | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) \| number \| string               |
| TimestampStyle      | "t" \| "T" \| "d" \| "D" \| "f" \| "F" \| "R"                                                                                   |
| TimestampResult     | \`<t:\${number}:\${[StyleType](https://github.com/notbojji/timecord#enums)[number]}>\`                                          |
| StyleResolvable     | [StyleType](https://github.com/notbojji/timecord#enums) \| keyof typeof [StyleType](https://github.com/notbojji/timecord#enums) |
| TimeUnitResolvable  | [TimeUnits](https://github.com/notbojji/timecord#enums) \| keyof typeof [TimeUnits](https://github.com/notbojji/timecord#enums) |

## Enums

| Name      | Property                                                                                                            | Value                                                       | Example Output                                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| TimeUnits | `Miliseconds`<br>`Seconds`<br>`Minutes`<br>`Hours`<br>`Days`                                                        | `1`<br>`1000`<br>`60000`<br>`3.6e6`<br>`8.64e7`             | This will be multiplied by the number passed by parameters in a function.<br>`<Number> * <Value>`                                     |
| StyleType | `ShortTime`<br>`LongTime`<br>`ShortDate`<br>`LongDate`<br>`ShortDateAndTime`<br>`LongDateAndTime`<br>`RelativeTime` | `'t'`<br>`'T'`<br>`'d'`<br>`'D'`<br>`'f'`<br>`'F'`<br>`'R'` | `16:20`<br>`16:20:30`<br>`20/04/2021`<br>`20 April 2021`<br>`20 April 2021 16:20`<br>`Tuesday, 20 April 2021 16:20`<br>`2 months ago` |
