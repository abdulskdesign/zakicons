import * as React from "react";
import { ZakIconProps, IconComponent } from "./types";
import { Accessibility } from "./icons/Accessibility";
import { Activity } from "./icons/Activity";
import { ActivitySquare } from "./icons/ActivitySquare";
import { AlertCircle } from "./icons/AlertCircle";
import { AlertTriangle } from "./icons/AlertTriangle";
import { Anchor } from "./icons/Anchor";
import { AnchorDock } from "./icons/AnchorDock";
import { Apple } from "./icons/Apple";
import { ArrowDown } from "./icons/ArrowDown";
import { ArrowDownLeft } from "./icons/ArrowDownLeft";
import { ArrowDownRight } from "./icons/ArrowDownRight";
import { ArrowDownToDot } from "./icons/ArrowDownToDot";
import { ArrowLeft } from "./icons/ArrowLeft";
import { ArrowLeftRight } from "./icons/ArrowLeftRight";
import { ArrowRight } from "./icons/ArrowRight";
import { ArrowUp } from "./icons/ArrowUp";
import { ArrowUpDown } from "./icons/ArrowUpDown";
import { ArrowUpFromDot } from "./icons/ArrowUpFromDot";
import { ArrowUpLeft } from "./icons/ArrowUpLeft";
import { ArrowUpRight } from "./icons/ArrowUpRight";
import { AtSign } from "./icons/AtSign";
import { Atom } from "./icons/Atom";
import { Award } from "./icons/Award";
import { BadgeCheck } from "./icons/BadgeCheck";
import { BadgePercent } from "./icons/BadgePercent";
import { Banknote } from "./icons/Banknote";
import { BarChart2 } from "./icons/BarChart2";
import { Barcode } from "./icons/Barcode";
import { BarcodeScanner } from "./icons/BarcodeScanner";
import { BatteryCharging } from "./icons/BatteryCharging";
import { Bell } from "./icons/Bell";
import { BellOff } from "./icons/BellOff";
import { Bike } from "./icons/Bike";
import { Blind } from "./icons/Blind";
import { Bluetooth } from "./icons/Bluetooth";
import { Bookmark } from "./icons/Bookmark";
import { Bot } from "./icons/Bot";
import { BoxAlert } from "./icons/BoxAlert";
import { BoxCheck } from "./icons/BoxCheck";
import { Brain } from "./icons/Brain";
import { Briefcase } from "./icons/Briefcase";
import { Bug } from "./icons/Bug";
import { Building } from "./icons/Building";
import { Bus } from "./icons/Bus";
import { Cake } from "./icons/Cake";
import { Calculator } from "./icons/Calculator";
import { Calendar } from "./icons/Calendar";
import { CalendarCheck } from "./icons/CalendarCheck";
import { CalendarDays } from "./icons/CalendarDays";
import { Camera } from "./icons/Camera";
import { Car } from "./icons/Car";
import { Cargo } from "./icons/Cargo";
import { CargoHold } from "./icons/CargoHold";
import { Cast } from "./icons/Cast";
import { Check } from "./icons/Check";
import { CheckCircle } from "./icons/CheckCircle";
import { CheckSquare } from "./icons/CheckSquare";
import { ChevronDown } from "./icons/ChevronDown";
import { ChevronLeft } from "./icons/ChevronLeft";
import { ChevronRight } from "./icons/ChevronRight";
import { ChevronUp } from "./icons/ChevronUp";
import { ChevronsDown } from "./icons/ChevronsDown";
import { ChevronsLeft } from "./icons/ChevronsLeft";
import { ChevronsRight } from "./icons/ChevronsRight";
import { ChevronsUp } from "./icons/ChevronsUp";
import { CircuitBoard } from "./icons/CircuitBoard";
import { Clipboard } from "./icons/Clipboard";
import { ClipboardCheck } from "./icons/ClipboardCheck";
import { Clock } from "./icons/Clock";
import { Cloud } from "./icons/Cloud";
import { CloudCog } from "./icons/CloudCog";
import { CloudDownload } from "./icons/CloudDownload";
import { CloudFog } from "./icons/CloudFog";
import { CloudLightning } from "./icons/CloudLightning";
import { CloudRain } from "./icons/CloudRain";
import { CloudUpload } from "./icons/CloudUpload";
import { Code } from "./icons/Code";
import { CodeXml } from "./icons/CodeXml";
import { Coffee } from "./icons/Coffee";
import { Coins } from "./icons/Coins";
import { Compass } from "./icons/Compass";
import { Contact } from "./icons/Contact";
import { Container } from "./icons/Container";
import { ContainerRefrigerated } from "./icons/ContainerRefrigerated";
import { ContainerStacked } from "./icons/ContainerStacked";
import { Conveyor } from "./icons/Conveyor";
import { ConveyorBox } from "./icons/ConveyorBox";
import { Copy } from "./icons/Copy";
import { CornerUpLeft } from "./icons/CornerUpLeft";
import { CornerUpRight } from "./icons/CornerUpRight";
import { Cpu } from "./icons/Cpu";
import { Crane } from "./icons/Crane";
import { CraneArm } from "./icons/CraneArm";
import { CreditCard } from "./icons/CreditCard";
import { Cross } from "./icons/Cross";
import { Crosshair } from "./icons/Crosshair";
import { Crown } from "./icons/Crown";
import { CupSoda } from "./icons/CupSoda";
import { Customs } from "./icons/Customs";
import { CustomsStamp } from "./icons/CustomsStamp";
import { Database } from "./icons/Database";
import { Delivery } from "./icons/Delivery";
import { Disc } from "./icons/Disc";
import { Dispatch } from "./icons/Dispatch";
import { Dna } from "./icons/Dna";
import { DollarSign } from "./icons/DollarSign";
import { Dolly } from "./icons/Dolly";
import { Download } from "./icons/Download";
import { Droplet } from "./icons/Droplet";
import { Ear } from "./icons/Ear";
import { Edit } from "./icons/Edit";
import { Equipment } from "./icons/Equipment";
import { Expand } from "./icons/Expand";
import { ExternalLink } from "./icons/ExternalLink";
import { Eye } from "./icons/Eye";
import { EyeOff } from "./icons/EyeOff";
import { FastForward } from "./icons/FastForward";
import { File } from "./icons/File";
import { FileArchive } from "./icons/FileArchive";
import { FileCheck } from "./icons/FileCheck";
import { FileCode } from "./icons/FileCode";
import { FileMinus } from "./icons/FileMinus";
import { FilePlus } from "./icons/FilePlus";
import { FileSignature } from "./icons/FileSignature";
import { FileSpreadsheet } from "./icons/FileSpreadsheet";
import { FileText } from "./icons/FileText";
import { Film } from "./icons/Film";
import { Filter } from "./icons/Filter";
import { Fingerprint } from "./icons/Fingerprint";
import { Flag } from "./icons/Flag";
import { Fleet } from "./icons/Fleet";
import { Folder } from "./icons/Folder";
import { FolderCheck } from "./icons/FolderCheck";
import { FolderLock } from "./icons/FolderLock";
import { FolderMinus } from "./icons/FolderMinus";
import { FolderOpen } from "./icons/FolderOpen";
import { FolderPlus } from "./icons/FolderPlus";
import { Forklift } from "./icons/Forklift";
import { Freight } from "./icons/Freight";
import { Fuel } from "./icons/Fuel";
import { Funnel } from "./icons/Funnel";
import { Gate } from "./icons/Gate";
import { Gauge } from "./icons/Gauge";
import { GaugeSpeed } from "./icons/GaugeSpeed";
import { Gift } from "./icons/Gift";
import { GitBranch } from "./icons/GitBranch";
import { GitCommit } from "./icons/GitCommit";
import { GitMerge } from "./icons/GitMerge";
import { GitPullRequest } from "./icons/GitPullRequest";
import { Globe } from "./icons/Globe";
import { Grid } from "./icons/Grid";
import { HardDrive } from "./icons/HardDrive";
import { Headphones } from "./icons/Headphones";
import { Heart } from "./icons/Heart";
import { HeartPulse } from "./icons/HeartPulse";
import { HelpCircle } from "./icons/HelpCircle";
import { Hotel } from "./icons/Hotel";
import { Hourglass } from "./icons/Hourglass";
import { Hub } from "./icons/Hub";
import { IdCard } from "./icons/IdCard";
import { Image } from "./icons/Image";
import { Inbox } from "./icons/Inbox";
import { Info } from "./icons/Info";
import { Inspection } from "./icons/Inspection";
import { Invoice } from "./icons/Invoice";
import { Key } from "./icons/Key";
import { Keyboard } from "./icons/Keyboard";
import { Landmark } from "./icons/Landmark";
import { Laptop } from "./icons/Laptop";
import { Layers } from "./icons/Layers";
import { LayersSystem } from "./icons/LayersSystem";
import { Layout } from "./icons/Layout";
import { Lightbulb } from "./icons/Lightbulb";
import { LineChart } from "./icons/LineChart";
import { Link } from "./icons/Link";
import { List } from "./icons/List";
import { Loader } from "./icons/Loader";
import { Locate } from "./icons/Locate";
import { Lock } from "./icons/Lock";
import { LogIn } from "./icons/LogIn";
import { LogOut } from "./icons/LogOut";
import { Luggage } from "./icons/Luggage";
import { Mail } from "./icons/Mail";
import { Map } from "./icons/Map";
import { MapPin } from "./icons/MapPin";
import { Maximize2 } from "./icons/Maximize2";
import { Menu } from "./icons/Menu";
import { MessageCircle } from "./icons/MessageCircle";
import { MessageSquare } from "./icons/MessageSquare";
import { Mic } from "./icons/Mic";
import { Milestone } from "./icons/Milestone";
import { Minimize2 } from "./icons/Minimize2";
import { Minus } from "./icons/Minus";
import { Monitor } from "./icons/Monitor";
import { MoonTheme } from "./icons/MoonTheme";
import { MoreHorizontal } from "./icons/MoreHorizontal";
import { MoreVertical } from "./icons/MoreVertical";
import { Mountain } from "./icons/Mountain";
import { Mouse } from "./icons/Mouse";
import { Move } from "./icons/Move";
import { Music } from "./icons/Music";
import { NavigationArrow } from "./icons/NavigationArrow";
import { Network } from "./icons/Network";
import { Operations } from "./icons/Operations";
import { Package } from "./icons/Package";
import { PackageSearch } from "./icons/PackageSearch";
import { Pallet } from "./icons/Pallet";
import { PalletTruck } from "./icons/PalletTruck";
import { ParcelFast } from "./icons/ParcelFast";
import { Passkey } from "./icons/Passkey";
import { Pause } from "./icons/Pause";
import { Percent } from "./icons/Percent";
import { Phone } from "./icons/Phone";
import { PhoneCall } from "./icons/PhoneCall";
import { PieChart } from "./icons/PieChart";
import { PieChartSlice } from "./icons/PieChartSlice";
import { PiggyBank } from "./icons/PiggyBank";
import { Pill } from "./icons/Pill";
import { Pizza } from "./icons/Pizza";
import { Plane } from "./icons/Plane";
import { PlaneLanding } from "./icons/PlaneLanding";
import { PlaneTakeoff } from "./icons/PlaneTakeoff";
import { Play } from "./icons/Play";
import { Plus } from "./icons/Plus";
import { Port } from "./icons/Port";
import { Power } from "./icons/Power";
import { PowerOff } from "./icons/PowerOff";
import { Presentation } from "./icons/Presentation";
import { Printer } from "./icons/Printer";
import { QrCode } from "./icons/QrCode";
import { RadioButton } from "./icons/RadioButton";
import { Rail } from "./icons/Rail";
import { Receipt } from "./icons/Receipt";
import { RefreshCcw } from "./icons/RefreshCcw";
import { RefreshCw } from "./icons/RefreshCw";
import { Rewind } from "./icons/Rewind";
import { RotateCcw } from "./icons/RotateCcw";
import { RotateCw } from "./icons/RotateCw";
import { Route } from "./icons/Route";
import { RouteLogistics } from "./icons/RouteLogistics";
import { Router } from "./icons/Router";
import { Rss } from "./icons/Rss";
import { Scale } from "./icons/Scale";
import { Scan } from "./icons/Scan";
import { SealCheck } from "./icons/SealCheck";
import { SealLock } from "./icons/SealLock";
import { Search } from "./icons/Search";
import { Send } from "./icons/Send";
import { Server } from "./icons/Server";
import { ServerCog } from "./icons/ServerCog";
import { ServerCrash } from "./icons/ServerCrash";
import { Settings } from "./icons/Settings";
import { Share } from "./icons/Share";
import { Share2 } from "./icons/Share2";
import { Shield } from "./icons/Shield";
import { ShieldAlert } from "./icons/ShieldAlert";
import { ShieldCheck } from "./icons/ShieldCheck";
import { ShieldOff } from "./icons/ShieldOff";
import { ShieldUser } from "./icons/ShieldUser";
import { ShieldX } from "./icons/ShieldX";
import { Ship } from "./icons/Ship";
import { ShipBoat } from "./icons/ShipBoat";
import { Shipment } from "./icons/Shipment";
import { ShoppingBag } from "./icons/ShoppingBag";
import { ShoppingBasket } from "./icons/ShoppingBasket";
import { ShoppingCart } from "./icons/ShoppingCart";
import { Shrink } from "./icons/Shrink";
import { Signpost } from "./icons/Signpost";
import { Sliders } from "./icons/Sliders";
import { SlidersHorizontal } from "./icons/SlidersHorizontal";
import { Smartphone } from "./icons/Smartphone";
import { Snowflake } from "./icons/Snowflake";
import { Sparkles } from "./icons/Sparkles";
import { Speaker } from "./icons/Speaker";
import { Square } from "./icons/Square";
import { Star } from "./icons/Star";
import { Stethoscope } from "./icons/Stethoscope";
import { Store } from "./icons/Store";
import { Sun } from "./icons/Sun";
import { SunBeach } from "./icons/SunBeach";
import { SunTheme } from "./icons/SunTheme";
import { Syringe } from "./icons/Syringe";
import { Table } from "./icons/Table";
import { Tablet } from "./icons/Tablet";
import { Tag } from "./icons/Tag";
import { Target } from "./icons/Target";
import { Tent } from "./icons/Tent";
import { Terminal } from "./icons/Terminal";
import { Thermometer } from "./icons/Thermometer";
import { ThermometerSun } from "./icons/ThermometerSun";
import { ThumbsDown } from "./icons/ThumbsDown";
import { ThumbsUp } from "./icons/ThumbsUp";
import { Timer } from "./icons/Timer";
import { ToggleLeft } from "./icons/ToggleLeft";
import { ToggleRight } from "./icons/ToggleRight";
import { Tool } from "./icons/Tool";
import { Tracking } from "./icons/Tracking";
import { Train } from "./icons/Train";
import { Trash2 } from "./icons/Trash2";
import { TrendingDown } from "./icons/TrendingDown";
import { TrendingUp } from "./icons/TrendingUp";
import { Truck } from "./icons/Truck";
import { Umbrella } from "./icons/Umbrella";
import { Unlock } from "./icons/Unlock";
import { Upload } from "./icons/Upload";
import { User } from "./icons/User";
import { UserCheck } from "./icons/UserCheck";
import { UserMinus } from "./icons/UserMinus";
import { UserPlus } from "./icons/UserPlus";
import { UserX } from "./icons/UserX";
import { Users } from "./icons/Users";
import { Utensils } from "./icons/Utensils";
import { Variable } from "./icons/Variable";
import { Vault } from "./icons/Vault";
import { Vendor } from "./icons/Vendor";
import { Video } from "./icons/Video";
import { Volume2 } from "./icons/Volume2";
import { VolumeX } from "./icons/VolumeX";
import { Wallet } from "./icons/Wallet";
import { Warehouse } from "./icons/Warehouse";
import { Webhook } from "./icons/Webhook";
import { Weight } from "./icons/Weight";
import { Wifi } from "./icons/Wifi";
import { Wind } from "./icons/Wind";
import { X } from "./icons/X";
import { XCircle } from "./icons/XCircle";
import { Zap } from "./icons/Zap";

const iconMap: Record<string, IconComponent> = {
  "accessibility": Accessibility,
  "activity": Activity,
  "activity-square": ActivitySquare,
  "alert-circle": AlertCircle,
  "alert-triangle": AlertTriangle,
  "anchor": Anchor,
  "anchor-dock": AnchorDock,
  "apple": Apple,
  "arrow-down": ArrowDown,
  "arrow-down-left": ArrowDownLeft,
  "arrow-down-right": ArrowDownRight,
  "arrow-down-to-dot": ArrowDownToDot,
  "arrow-left": ArrowLeft,
  "arrow-left-right": ArrowLeftRight,
  "arrow-right": ArrowRight,
  "arrow-up": ArrowUp,
  "arrow-up-down": ArrowUpDown,
  "arrow-up-from-dot": ArrowUpFromDot,
  "arrow-up-left": ArrowUpLeft,
  "arrow-up-right": ArrowUpRight,
  "at-sign": AtSign,
  "atom": Atom,
  "award": Award,
  "badge-check": BadgeCheck,
  "badge-percent": BadgePercent,
  "banknote": Banknote,
  "bar-chart-2": BarChart2,
  "barcode": Barcode,
  "barcode-scanner": BarcodeScanner,
  "battery-charging": BatteryCharging,
  "bell": Bell,
  "bell-off": BellOff,
  "bike": Bike,
  "blind": Blind,
  "bluetooth": Bluetooth,
  "bookmark": Bookmark,
  "bot": Bot,
  "box-alert": BoxAlert,
  "box-check": BoxCheck,
  "brain": Brain,
  "briefcase": Briefcase,
  "bug": Bug,
  "building": Building,
  "bus": Bus,
  "cake": Cake,
  "calculator": Calculator,
  "calendar": Calendar,
  "calendar-check": CalendarCheck,
  "calendar-days": CalendarDays,
  "camera": Camera,
  "car": Car,
  "cargo": Cargo,
  "cargo-hold": CargoHold,
  "cast": Cast,
  "check": Check,
  "check-circle": CheckCircle,
  "check-square": CheckSquare,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "chevron-up": ChevronUp,
  "chevrons-down": ChevronsDown,
  "chevrons-left": ChevronsLeft,
  "chevrons-right": ChevronsRight,
  "chevrons-up": ChevronsUp,
  "circuit-board": CircuitBoard,
  "clipboard": Clipboard,
  "clipboard-check": ClipboardCheck,
  "clock": Clock,
  "cloud": Cloud,
  "cloud-cog": CloudCog,
  "cloud-download": CloudDownload,
  "cloud-fog": CloudFog,
  "cloud-lightning": CloudLightning,
  "cloud-rain": CloudRain,
  "cloud-upload": CloudUpload,
  "code": Code,
  "code-xml": CodeXml,
  "coffee": Coffee,
  "coins": Coins,
  "compass": Compass,
  "contact": Contact,
  "container": Container,
  "container-refrigerated": ContainerRefrigerated,
  "container-stacked": ContainerStacked,
  "conveyor": Conveyor,
  "conveyor-box": ConveyorBox,
  "copy": Copy,
  "corner-up-left": CornerUpLeft,
  "corner-up-right": CornerUpRight,
  "cpu": Cpu,
  "crane": Crane,
  "crane-arm": CraneArm,
  "credit-card": CreditCard,
  "cross": Cross,
  "crosshair": Crosshair,
  "crown": Crown,
  "cup-soda": CupSoda,
  "customs": Customs,
  "customs-stamp": CustomsStamp,
  "database": Database,
  "delivery": Delivery,
  "disc": Disc,
  "dispatch": Dispatch,
  "dna": Dna,
  "dollar-sign": DollarSign,
  "dolly": Dolly,
  "download": Download,
  "droplet": Droplet,
  "ear": Ear,
  "edit": Edit,
  "equipment": Equipment,
  "expand": Expand,
  "external-link": ExternalLink,
  "eye": Eye,
  "eye-off": EyeOff,
  "fast-forward": FastForward,
  "file": File,
  "file-archive": FileArchive,
  "file-check": FileCheck,
  "file-code": FileCode,
  "file-minus": FileMinus,
  "file-plus": FilePlus,
  "file-signature": FileSignature,
  "file-spreadsheet": FileSpreadsheet,
  "file-text": FileText,
  "film": Film,
  "filter": Filter,
  "fingerprint": Fingerprint,
  "flag": Flag,
  "fleet": Fleet,
  "folder": Folder,
  "folder-check": FolderCheck,
  "folder-lock": FolderLock,
  "folder-minus": FolderMinus,
  "folder-open": FolderOpen,
  "folder-plus": FolderPlus,
  "forklift": Forklift,
  "freight": Freight,
  "fuel": Fuel,
  "funnel": Funnel,
  "gate": Gate,
  "gauge": Gauge,
  "gauge-speed": GaugeSpeed,
  "gift": Gift,
  "git-branch": GitBranch,
  "git-commit": GitCommit,
  "git-merge": GitMerge,
  "git-pull-request": GitPullRequest,
  "globe": Globe,
  "grid": Grid,
  "hard-drive": HardDrive,
  "headphones": Headphones,
  "heart": Heart,
  "heart-pulse": HeartPulse,
  "help-circle": HelpCircle,
  "hotel": Hotel,
  "hourglass": Hourglass,
  "hub": Hub,
  "id-card": IdCard,
  "image": Image,
  "inbox": Inbox,
  "info": Info,
  "inspection": Inspection,
  "invoice": Invoice,
  "key": Key,
  "keyboard": Keyboard,
  "landmark": Landmark,
  "laptop": Laptop,
  "layers": Layers,
  "layers-system": LayersSystem,
  "layout": Layout,
  "lightbulb": Lightbulb,
  "line-chart": LineChart,
  "link": Link,
  "list": List,
  "loader": Loader,
  "locate": Locate,
  "lock": Lock,
  "log-in": LogIn,
  "log-out": LogOut,
  "luggage": Luggage,
  "mail": Mail,
  "map": Map,
  "map-pin": MapPin,
  "maximize-2": Maximize2,
  "menu": Menu,
  "message-circle": MessageCircle,
  "message-square": MessageSquare,
  "mic": Mic,
  "milestone": Milestone,
  "minimize-2": Minimize2,
  "minus": Minus,
  "monitor": Monitor,
  "moon-theme": MoonTheme,
  "more-horizontal": MoreHorizontal,
  "more-vertical": MoreVertical,
  "mountain": Mountain,
  "mouse": Mouse,
  "move": Move,
  "music": Music,
  "navigation-arrow": NavigationArrow,
  "network": Network,
  "operations": Operations,
  "package": Package,
  "package-search": PackageSearch,
  "pallet": Pallet,
  "pallet-truck": PalletTruck,
  "parcel-fast": ParcelFast,
  "passkey": Passkey,
  "pause": Pause,
  "percent": Percent,
  "phone": Phone,
  "phone-call": PhoneCall,
  "pie-chart": PieChart,
  "pie-chart-slice": PieChartSlice,
  "piggy-bank": PiggyBank,
  "pill": Pill,
  "pizza": Pizza,
  "plane": Plane,
  "plane-landing": PlaneLanding,
  "plane-takeoff": PlaneTakeoff,
  "play": Play,
  "plus": Plus,
  "port": Port,
  "power": Power,
  "power-off": PowerOff,
  "presentation": Presentation,
  "printer": Printer,
  "qr-code": QrCode,
  "radio-button": RadioButton,
  "rail": Rail,
  "receipt": Receipt,
  "refresh-ccw": RefreshCcw,
  "refresh-cw": RefreshCw,
  "rewind": Rewind,
  "rotate-ccw": RotateCcw,
  "rotate-cw": RotateCw,
  "route": Route,
  "route-logistics": RouteLogistics,
  "router": Router,
  "rss": Rss,
  "scale": Scale,
  "scan": Scan,
  "seal-check": SealCheck,
  "seal-lock": SealLock,
  "search": Search,
  "send": Send,
  "server": Server,
  "server-cog": ServerCog,
  "server-crash": ServerCrash,
  "settings": Settings,
  "share": Share,
  "share-2": Share2,
  "shield": Shield,
  "shield-alert": ShieldAlert,
  "shield-check": ShieldCheck,
  "shield-off": ShieldOff,
  "shield-user": ShieldUser,
  "shield-x": ShieldX,
  "ship": Ship,
  "ship-boat": ShipBoat,
  "shipment": Shipment,
  "shopping-bag": ShoppingBag,
  "shopping-basket": ShoppingBasket,
  "shopping-cart": ShoppingCart,
  "shrink": Shrink,
  "signpost": Signpost,
  "sliders": Sliders,
  "sliders-horizontal": SlidersHorizontal,
  "smartphone": Smartphone,
  "snowflake": Snowflake,
  "sparkles": Sparkles,
  "speaker": Speaker,
  "square": Square,
  "star": Star,
  "stethoscope": Stethoscope,
  "store": Store,
  "sun": Sun,
  "sun-beach": SunBeach,
  "sun-theme": SunTheme,
  "syringe": Syringe,
  "table": Table,
  "tablet": Tablet,
  "tag": Tag,
  "target": Target,
  "tent": Tent,
  "terminal": Terminal,
  "thermometer": Thermometer,
  "thermometer-sun": ThermometerSun,
  "thumbs-down": ThumbsDown,
  "thumbs-up": ThumbsUp,
  "timer": Timer,
  "toggle-left": ToggleLeft,
  "toggle-right": ToggleRight,
  "tool": Tool,
  "tracking": Tracking,
  "train": Train,
  "trash-2": Trash2,
  "trending-down": TrendingDown,
  "trending-up": TrendingUp,
  "truck": Truck,
  "umbrella": Umbrella,
  "unlock": Unlock,
  "upload": Upload,
  "user": User,
  "user-check": UserCheck,
  "user-minus": UserMinus,
  "user-plus": UserPlus,
  "user-x": UserX,
  "users": Users,
  "utensils": Utensils,
  "variable": Variable,
  "vault": Vault,
  "vendor": Vendor,
  "video": Video,
  "volume-2": Volume2,
  "volume-x": VolumeX,
  "wallet": Wallet,
  "warehouse": Warehouse,
  "webhook": Webhook,
  "weight": Weight,
  "wifi": Wifi,
  "wind": Wind,
  "x": X,
  "x-circle": XCircle,
  "zap": Zap,
};

export interface GenericZakIconProps extends ZakIconProps {
  name: string;
}

export const ZakIcon = React.forwardRef<SVGSVGElement, GenericZakIconProps>(
  ({ name, ...props }, ref) => {
    const Component = iconMap[name];
    if (!Component) {
      console.warn(`[ZAK Icons] Icon "${name}" not found.`);
      return null;
    }
    return <Component ref={ref} {...props} />;
  }
);

ZakIcon.displayName = "ZakIcon";
