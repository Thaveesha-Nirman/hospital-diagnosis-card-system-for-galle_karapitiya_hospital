/**
 * @module DraggableContainer
 * @description Manages absolute coordinate mapping and grid bounding rules for UI print blocks.
 * @author Dilshan Warshakoon (Member 3)
 */


import React, { useRef, useImperativeHandle, forwardRef, ReactNode } from 'react';

import Draggable, { DraggableProps } from 'react-draggable'; 


interface DraggableContainerProps extends DraggableProps {
  children: ReactNode;
}



const DraggableContainer = forwardRef<Draggable, DraggableContainerProps>((props, ref) => {
  const innerRef = useRef<HTMLDivElement>(null);
  
  
  useImperativeHandle(ref, () => ({
    
    findDOMNode: () => innerRef.current,
  }));


  

  
  
  return (
    
    <div ref={innerRef} style={{ display: 'contents' }}>
      {}
      <Draggable {...props}>
        {props.children}
      </Draggable>
    </div>
  );
});


DraggableContainer.displayName = 'DraggableContainer';

export default DraggableContainer;
