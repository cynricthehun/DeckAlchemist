# DeckAlchemist
A Decklist Application

## Application Description
Players will visit and login to this application to store their decklists. They will be able share their lists with their friends make them public for all to see.

Decklists are comprised of 75 cards or based on a format type. For example if a deck list is being listed as ‘draft’ then it will have a restriction of a minimum of 40 cards. For Standard, Modern, Legacy types the minimum will be 60 cards listed in the main deck. For each deck there is a ‘sideboard’. Sideboards are set to a maximum of 15 cards for Standard, Modern, Legacy, but for Draft type the deck can have more or less than 15 cards.

There are several deck building applications out there, but ours will be set apart by the social networking opportunities of having a friends list and the ability to have card suggestions when building a deck.

## Prerequisites
 - MongoDB
 - Conemu (recommended for window users)

## Start the project
 1. Create a the following folder structure in the application directory '/data/db'
 2. Add the mongoDB bin folder to your windows envirnoment path varible.
 3. Restart your console and run mongod -dbpath "C:\projects\project\data\db"
   - be sure that the path leads to the folders you just created.
   - to connect to mongo run 'mongo' in a new console window.
 4. Open another console window in your project directory. Run 'node server'.
