"use client"
import React from 'react';
import Image from 'next/image';
import { cn } from '@/utils/cn';

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'gradient' | 'outline' | 'glass' | 'hover' | 'animated';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    hoverable?: boolean;
    clickable?: boolean;
    onClick?: () => void;
    title?: string;
    subtitle?: string;
    image?: string;
    imageAlt?: string;
    footer?: React.ReactNode;
    header?: React.ReactNode;
    badge?: string | React.ReactNode;
    borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({
    children,
    className,
    variant = 'default',
    size = 'md',
    hoverable = false,
    clickable = false,
    onClick,
    title,
    subtitle,
    image,
    imageAlt,
    footer,
    header,
    badge,
    borderRadius = 'lg',
    ...props
}, ref) => {
    const baseClasses = "relative overflow-hidden transition-all duration-300 ease-in-out";

    const variantClasses = {
        default: "bg-gray-900 border border-gray-800 text-white",
        gradient: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 text-white",
        outline: "bg-transparent border-2 border-gray-600 text-white hover:border-gray-400",
        glass: "bg-white/5 backdrop-blur-md border border-white/10 text-white",
        hover: "bg-gray-900 border border-gray-800 text-white hover:bg-gray-800 hover:border-gray-600 hover:shadow-xl hover:shadow-blue-500/20",
        animated: "bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 border border-gray-700 text-white hover:from-gray-800 hover:via-purple-800/30 hover:to-gray-800 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/25"
    };

    const sizeClasses = {
        sm: "p-3",
        md: "p-4 sm:p-6",
        lg: "p-6 sm:p-8",
        xl: "p-8 sm:p-10"
    };

    const radiusClasses = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        '2xl': "rounded-2xl",
        '3xl': "rounded-3xl"
    };

    const hoverClasses = hoverable ? "hover:scale-105 hover:-translate-y-1" : "";
    const clickableClasses = clickable ? "cursor-pointer active:scale-95" : "";

    return (
        <div
            ref={ref}
            className={cn(
                baseClasses,
                variantClasses[variant],
                sizeClasses[size],
                radiusClasses[borderRadius],
                hoverClasses,
                clickableClasses,
                className
            )}
            onClick={clickable ? onClick : undefined}
            {...props}
        >
            {/* Badge */}
            {badge && (
                <div className="absolute top-3 right-3 z-10">
                    {typeof badge === 'string' ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-600 text-white">
                            {badge}
                        </span>
                    ) : (
                        badge
                    )}
                </div>
            )}

            {/* Header */}
            {header && (
                <div className="mb-4">
                    {header}
                </div>
            )}

            {/* Image */}
            {image && (
                <div className="mb-4 -mx-4 sm:-mx-6 -mt-4 sm:-mt-6 relative h-48">
                    <Image
                        src={image}
                        alt={imageAlt || "Card image"}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            {/* Title and Subtitle */}
            {(title || subtitle) && (
                <div className="mb-4">
                    {title && (
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                            {title}
                        </h3>
                    )}
                    {subtitle && (
                        <p className="text-sm sm:text-base text-gray-300">
                            {subtitle}
                        </p>
                    )}
                </div>
            )}

            {/* Content */}
            <div className="flex-1">
                {children}
            </div>

            {/* Footer */}
            {footer && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                    {footer}
                </div>
            )}
        </div>
    );
});

Card.displayName = "Card";

// Preset card variants for common use cases
export const ProjectCard = ({ title, description, technologies, image, onClick, ...props }: {
    title: string;
    description: string;
    technologies?: string[];
    image?: string;
    onClick?: () => void;
} & Omit<CardProps, 'title' | 'children'>) => (
    <Card
        title={title}
        variant="animated"
        hoverable
        clickable={!!onClick}
        onClick={onClick}
        image={image}
        borderRadius="xl"
        {...props}
    >
        <p className="text-gray-300 mb-4">{description}</p>
        {technologies && (
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-600/20 text-blue-300 border border-blue-500/30"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        )}
    </Card>
);

export const FeatureCard = ({ icon, title, description, ...props }: {
    icon: React.ReactNode;
    title: string;
    description: string;
} & Omit<CardProps, 'title' | 'children'>) => (
    <Card
        variant="glass"
        hoverable
        borderRadius="xl"
        className="text-center"
        {...props}
    >
        <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                {icon}
            </div>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </Card>
);

export const StatsCard = ({ value, label, change, trend, ...props }: {
    value: string | number;
    label: string;
    change?: string;
    trend?: 'up' | 'down' | 'neutral';
} & Omit<CardProps, 'children'>) => (
    <Card
        variant="gradient"
        borderRadius="lg"
        {...props}
    >
        <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{value}</div>
            <div className="text-sm text-gray-300 mb-2">{label}</div>
            {change && (
                <div className={cn(
                    "text-xs font-medium",
                    trend === 'up' && "text-green-400",
                    trend === 'down' && "text-red-400",
                    trend === 'neutral' && "text-gray-400"
                )}>
                    {change}
                </div>
            )}
        </div>
    </Card>
);

export default Card;