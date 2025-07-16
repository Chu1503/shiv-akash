declare module 'react-vertical-timeline-component' {
    import * as React from 'react';
  
    export interface VerticalTimelineProps {
      animate?: boolean;
      className?: string;
      layout?: '1-column-left' | '1-column' | '2-columns';
      children?: React.ReactNode;
    }
  
    export interface VerticalTimelineElementProps {
      className?: string;
      contentStyle?: React.CSSProperties;
      contentArrowStyle?: React.CSSProperties;
      date?: string;
      iconStyle?: React.CSSProperties;
      icon?: React.ReactNode;
      position?: string;
      children?: React.ReactNode;
    }
  
    export const VerticalTimeline: React.FC<VerticalTimelineProps>;
    export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
  }
  