### Title:
Tag, play and visualize melodies for music theory education purposes.

#### Purpose:
- wip

#### Description:
- Play and visualize melodies using vexflow and Real piano recorded audio.
- Add tags/Descriptions to melodies using Admin authentication. 
- Automate and ease conversion of midi melodies to string based descriptions and store in db

#### Technologies:
- React / (maybe Nativescript/React Native)
- Jest
- Typescript
- Vexflow
- Tonejs midi
- Webmidi
- Dotnet 6 Api
- Entity Framework
- XUnit
- Fluent Assertions

#### Tags:
- stepwise
- leaps
- diatonic
- modal interchange
- modulation ... etc

#### Backend Entity Class Properties:
- melody : string ( melody definition converted to a string which conatins enough infrmation to be parsed by vexflow and played using piano note mp3) No duplicates
- title : string (optional)
- composer: string (optional)
- tag1
- tag2
- tag3 ... etc
