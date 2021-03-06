import React, { ReactElement } from "react";
import { Draggable, DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import hash from "object-hash";

export interface ListManagerItemProps {
  item: any;
  index: number;
  render(item: any): ReactElement<{}>;
  chunkIndex: number;
}

export const ListManagerItem: React.StatelessComponent<ListManagerItemProps> = ({
  item,
  index,
  render,
  chunkIndex
}: ListManagerItemProps) => (
  <Draggable draggableId={hash(item)} index={index}>
    {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        {render({item, index, chunkIndex, ...snapshot})}
      </div>
    )}
  </Draggable>
);
