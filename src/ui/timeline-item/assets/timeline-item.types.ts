export interface TTimelineItemProps {
  title: string;
  text: string;
  date: string;
  chips: {
    color?: 'primary' | 'secondary';
    label: string;
  }[];
}
