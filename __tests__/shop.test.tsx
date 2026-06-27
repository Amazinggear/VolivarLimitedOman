import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ShopPage from '@/app/templates/aurora/shop/page';
import React from 'react';

interface MockImageProps {
  src: string;
  alt: string;
  [key: string]: unknown;
}

interface MockMotionProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

// Mock next/image
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: MockImageProps) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} {...props} />;
  },
}));

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, ...props }: MockMotionProps) => (
      <div className={className} {...props}>{children}</div>
    ),
    h1: ({ children, className, ...props }: MockMotionProps) => (
      <h1 className={className} {...props}>{children}</h1>
    ),
    p: ({ children, className, ...props }: MockMotionProps) => (
      <p className={className} {...props}>{children}</p>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('ShopPage', () => {
  it('renders products and the header', () => {
    render(<ShopPage />);
    
    // Check header
    expect(screen.getByText('متجر')).toBeInTheDocument();
    
    // Check products
    expect(screen.getByText('مزيج أورورا الكلاسيكي')).toBeInTheDocument();
    expect(screen.getByText('قهوة كوستاريكا المختصة')).toBeInTheDocument();
  });

  it('shows a toast notification when adding a product to cart', () => {
    render(<ShopPage />);
    
    // Find add to cart buttons
    const buttons = screen.getAllByRole('button', { name: 'أضف إلى السلة' });
    expect(buttons.length).toBeGreaterThan(0);
    
    // Click the first button
    fireEvent.click(buttons[0]);
    
    // Toast notification text should be visible
    expect(screen.getByText('تم إضافة المنتج للسلة')).toBeInTheDocument();
  });
});
