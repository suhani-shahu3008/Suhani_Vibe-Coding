import React from 'react';
import {
  Route,
  User,
  ShoppingCart,
  Truck,
  MapPin,
  Phone,
  Upload,
  Trash2,
  Edit2,
  Check,
  Clock,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Search,
  Settings,
  Filter,
  Bell,
  Download,
  Plus,
  Minus,
  X,
  Calendar,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle2,
  Info,
  Layers,
  BarChart3,
  PieChart,
  Navigation,
  Globe,
  Radio,
  Sliders,
  MoreVertical,
  MoreHorizontal,
  RefreshCw,
  LogOut,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  Lock,
  Unlock,
  Shield,
  HelpCircle,
  FileText,
  Mail
} from 'lucide-react';
import './Icons.css';

export type IconName =
  | 'Route'
  | 'Profile 2'
  | 'Cart'
  | 'Truck 2'
  | 'Location filled'
  | 'Call'
  | 'Upload'
  | 'Delete'
  | 'Edit 2'
  | 'Tick'
  | 'Clock 2'
  | 'Clock'
  | 'Stock up'
  | 'Right Arrow'
  | 'Left Arrow'
  | 'Up Arrow'
  | 'Down Arrow'
  | 'Search'
  | 'Settings'
  | 'Filter'
  | 'Notification'
  | 'Download'
  | 'Add'
  | 'Minus'
  | 'Close'
  | 'Calendar'
  | 'Eye'
  | 'Eye Slash'
  | 'Alert'
  | 'Success'
  | 'Info'
  | 'Layers'
  | 'Bar Chart'
  | 'Pie Chart'
  | 'Navigation'
  | 'Globe'
  | 'Radio'
  | 'Sliders'
  | 'More Vertical'
  | 'More Horizontal'
  | 'Refresh'
  | 'Logout'
  | 'Maximize'
  | 'Minimize'
  | 'Zoom In'
  | 'Zoom Out'
  | 'Lock'
  | 'Unlock'
  | 'Shield'
  | 'Help'
  | 'Document'
  | 'Mail';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName | string;
  mode?: 'Light' | 'Dark';
  size?: number | string;
  color?: string;
  className?: string;
}

const iconMap: Record<string, React.FC<any>> = {
  'Route': Route,
  'Profile 2': User,
  'Cart': ShoppingCart,
  'Truck 2': Truck,
  'Location filled': MapPin,
  'Call': Phone,
  'Upload': Upload,
  'Delete': Trash2,
  'Edit 2': Edit2,
  'Tick': Check,
  'Clock 2': Clock,
  'Clock': Clock,
  'Stock up': TrendingUp,
  'Right Arrow': ChevronRight,
  'Left Arrow': ChevronLeft,
  'Up Arrow': ChevronUp,
  'Down Arrow': ChevronDown,
  'Search': Search,
  'Settings': Settings,
  'Filter': Filter,
  'Notification': Bell,
  'Download': Download,
  'Add': Plus,
  'Minus': Minus,
  'Close': X,
  'Calendar': Calendar,
  'Eye': Eye,
  'Eye Slash': EyeOff,
  'Alert': AlertCircle,
  'Success': CheckCircle2,
  'Info': Info,
  'Layers': Layers,
  'Bar Chart': BarChart3,
  'Pie Chart': PieChart,
  'Navigation': Navigation,
  'Globe': Globe,
  'Radio': Radio,
  'Sliders': Sliders,
  'More Vertical': MoreVertical,
  'More Horizontal': MoreHorizontal,
  'Refresh': RefreshCw,
  'Logout': LogOut,
  'Maximize': Maximize2,
  'Minimize': Minimize2,
  'Zoom In': ZoomIn,
  'Zoom Out': ZoomOut,
  'Lock': Lock,
  'Unlock': Unlock,
  'Shield': Shield,
  'Help': HelpCircle,
  'Document': FileText,
  'Mail': Mail,
};

export const Icons: React.FC<IconProps> = ({
  name,
  mode = 'Light',
  size = 20,
  color,
  className = '',
  ...rest
}) => {
  const IconComponent = iconMap[name] || HelpCircle;
  const computedColor = color || (mode === 'Dark' ? 'var(--uedp-white, #ffffff)' : 'var(--uedp-slate-700, #334155)');

  return (
    <span className={`uedp-icon uedp-icon--${mode.toLowerCase()} ${className}`} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <IconComponent size={size} color={computedColor} {...rest} />
    </span>
  );
};
