export interface Capability {
  title: string;
  description: string;
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  width?: number;
  height?: number;
}
