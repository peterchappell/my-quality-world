This is a proof of concept idea for a Quality World App.

A "Quality World" is an idea from Choice Theory. Our Quality World is our collection of relationships, 
activities and objects etc that have some value to us. Each item in the Quality World helps us meet
our basic needs. For example, a relationship might help meet our need for love and belonging while 
different hobbies might help us meet combinations of fun, power, freedom and survival. 

A common exercise in Choice Theory is to map out your Quality World, thinking about the items in 
your quality world, and also about how close or relevant they are to you at this point in time.

This app is a proof of concept for how you might be able to transfer a Quality World exercise to an
application - allowing you to flip through your quality world items like cards and also allowing you
to see the effect they have on your needs being met as you move them around on a map.

## A note about data storage...

This app uses IndexedDB for storage of all data. No data is stored online. This was done primarily 
because it allowed for faster development. However, it might also be an advantage since no personal
data is stored online... The downside is that no data is shared between devices...

## TODO

This is really only a proof of concept so there is plenty left to do including:

- Tests and type-checking
- Edit items (in particular change the image)
- Allow items to be drawn (drawing tool)
- Improve algorithm for the needs met scores
- Better management of the scaling of the map
- A more visually dynamic map
- Account
    - Avatar
    - Allow sync between devices
    - Or perhaps allow export and import and not store online 

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
