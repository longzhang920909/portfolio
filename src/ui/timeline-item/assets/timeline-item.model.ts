export interface TTimelineItemProps {
  title: string;
  text: string;
  date: string;
  chips: {
    color?: string;
    label: string;
  }[];
}
