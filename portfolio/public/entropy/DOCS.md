# Entropy

Welcome to the documentation of Entropy.

## Autobuy

I don't like it when games derive difficulty from asking users to click laborously. I like it when things are automated. Therefore, the game has an "autobuy" feature that allows all purchasing decisions to be automated.

Each building has an associated "formula", which allows entry of arbitrary text by you. The text is interpreted as sort of a programming language (more on that later), but for now, you can think of it as the formulas in your favorite spreadsheet program.

To use the feature, fill in a formula to each "formula" input box. Then, the game will re-evaluate the formula on each tick to get an "autobuy value". On each tick, if the building with the highest autobuy value is affordable, that building will be bought. 

## Example Autobuy Formulas

Skip to the sections below if you want to learn about this feature bottom-to-top.

- `3 + 5` will always yield a value of 5.
- `building_tv_cost` will yield 150 at zero TVs owned, and then go up with the price of TVs.
- `building_flipper_cost / building_flipper_ept` will yield the amount of ticks it would take for a flipper to "amortize" its own cost, without consideration for any other synergies.
- `building_flipper_count < 20 ? 9999 : -9999` would yield a high value (`9999`) as long as less than 20 coin flippers were owned, and a really low value (`-9999`) otherwise.

## Autobuy Variables

Autobuy formulas can respond to the state of the game by referencing variables. Numbers that can be referenced are underlined with dashed lines; hovering these numbers or the nearby text will show the variable that can be used within the autobuy formula.

- `entropy` is your current amount of entropy
- `ept` is your current amount of entropy per tick

Variables about buildings follow this convention:
- `building_<building>_ept` is the entropy per tick that a single instance of that building gains.
- `building_<building>_cost` is the current cost of the building.
- `building_<building>_count` is the current amount of that building you own.

The buildings are:
- `flipper`
- `tv`

## Example Autobuy Operators

You can use the following operators;
- `+` for addition
- `-` for subtraction
- `/` for division
- `*` for multiplication
- `()` for grouping operations
- `%` for modulus
- `<condition> ? <val-if-true> : <val-if-false>` for conditional evaluation.

## Autobuy Details

Whenever autobuy makes a purchase, formulas will then be re-evaulated and autobuy will be re-considered process repeated until the highest valued building is not affordable, in which case the game keeps on ticking.

If any of the autobuy values is 0, the autobuy feature is disabled. This is subject to change in the future.

Formulas are evaluated by (hscript)[https://github.com/HaxeFoundation/hscript]. Go nuts. Please don't set to game variables, I didn't yet build in protection against that :)