
const MoveCircle = (entities, { touches }) => {
    // console.log(touches)

  //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
  //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
  //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
  //-- That said, it's probably worth considering performance implications in either case.

  touches.filter(t => t.type === "move").forEach(t => {
    // console.log(t)
    let x = t.event.pageX;
    let y = t.event.pageY - 80;
    for (const [id, ent] of Object.entries(entities)) {
      if (0 < x - ent.position[0] 
        && x - ent.position[0] < 20 
        && 0 < y - ent.position[1]
        && y - ent.position[1] < 20) {
        ent.position = [
          ent.position[0] + t.delta.pageX,
          ent.position[1] + t.delta.pageY
        ];
      }
    }
    // let finger = entities[t.id];
    // if (finger && finger.position) {
    //   finger.position = [
    //     finger.position[0] + t.delta.pageX,
    //     finger.position[1] + t.delta.pageY
    //   ];
    // }
  });

  return entities;
};

export { MoveCircle };