import {
  Layers, Wind, Box, Truck, Building2, Building,
  Clock, BadgeCheck, Tag,
  Phone, Mail, MapPin, ClockIcon,
  ArrowRight, Send,
  MessageCircle, Briefcase,
  Home, Image, Info,
  Zap, Sun, Monitor,
  FileText, CheckCircle,
  HardHat,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Layers, Wind, Box, Truck, Building2, Building,
  Clock, BadgeCheck, Tag,
  Phone, Mail, MapPin, ClockIcon,
  ArrowRight, Send,
  MessageCircle, Briefcase,
  Home, Image, Info,
  Zap, Sun, Monitor,
  FileText, CheckCircle,
  HardHat,
}

export default function Icon({ name, size = 22, strokeWidth = 1.5, color }: {
  name: string
  size?: number
  strokeWidth?: number
  color?: string
}) {
  const Component = iconMap[name]
  if (!Component) return null
  return <Component size={size} strokeWidth={strokeWidth} color={color} />
}
