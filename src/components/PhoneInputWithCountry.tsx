import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, AlertCircle } from 'lucide-react';

export interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
  maxLength: number;
  format: string;
}

export const COUNTRIES: Country[] = [
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳', maxLength: 10, format: '10 digits' },
  { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', flag: '🇦🇪', maxLength: 9, format: '9 digits' },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦', maxLength: 9, format: '9 digits' },
  { code: 'QA', name: 'Qatar', dialCode: '+974', flag: '🇶🇦', maxLength: 8, format: '8 digits' },
  { code: 'OM', name: 'Oman', dialCode: '+968', flag: '🇴🇲', maxLength: 8, format: '8 digits' },
  { code: 'KW', name: 'Kuwait', dialCode: '+965', flag: '🇰🇼', maxLength: 8, format: '8 digits' },
  { code: 'BH', name: 'Bahrain', dialCode: '+973', flag: '🇧🇭', maxLength: 8, format: '8 digits' },
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸', maxLength: 10, format: '10 digits' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧', maxLength: 10, format: '10 digits' },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬', maxLength: 8, format: '8 digits' },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪', maxLength: 11, format: '10-11 digits' },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺', maxLength: 9, format: '9 digits' },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦', maxLength: 10, format: '10 digits' },
  { code: 'LK', name: 'Sri Lanka', dialCode: '+94', flag: '🇱🇰', maxLength: 9, format: '9 digits' },
  { code: 'BD', name: 'Bangladesh', dialCode: '+880', flag: '🇧🇩', maxLength: 10, format: '10 digits' },
  { code: 'NP', name: 'Nepal', dialCode: '+977', flag: '🇳🇵', maxLength: 10, format: '10 digits' },
  { code: 'KE', name: 'Kenya', dialCode: '+254', flag: '🇰🇪', maxLength: 9, format: '9 digits' },
  { code: 'ZA', name: 'South Africa', dialCode: '+27', flag: '🇿🇦', maxLength: 9, format: '9 digits' },
];

export interface PhoneInputWithCountryProps {
  phone: string;
  countryCode: string;
  compact?: boolean;
  onPhoneChange: (cleanPhone: string) => void;
  onCountryChange: (country: Country) => void;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const PhoneInputWithCountry: React.FC<PhoneInputWithCountryProps> = ({
  phone,
  countryCode,
  compact = false,
  onPhoneChange,
  onCountryChange,
  error,
  placeholder = 'Enter mobile number',
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const selectedCountry = COUNTRIES.find(c => c.code === countryCode) || COUNTRIES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const filteredCountries = COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.dialCode.includes(searchQuery) ||
    c.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/\D/g, '');
    const cleanVal = rawVal.slice(0, selectedCountry.maxLength);
    onPhoneChange(cleanVal);
  };

  return (
    <div className="hybeq-phone-input-container" style={{ position: 'relative', width: '100%' }}>
      <div
        className={`hybeq-phone-input-row ${error ? 'has-error' : ''}`}
        style={{
          display: 'flex',
          alignItems: 'stretch',
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: 8,
          border: `1.5px solid ${error ? '#EF4444' : '#DFE6EF'}`,
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          boxSizing: 'border-box'
        }}
      >
        {/* Country Selector Trigger */}
        <div ref={dropdownRef} style={{ position: 'relative' }}>
          <button
            type="button"
            className="hybeq-country-trigger"
            onClick={() => !disabled && setIsOpen(!isOpen)}
            disabled={disabled}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-label={`Selected country: ${selectedCountry.name} (${selectedCountry.dialCode})`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              height: '100%',
              padding: compact ? '9px 10px' : '11px 12px',
              backgroundColor: '#F8FAFC',
              border: 'none',
              borderRight: '1.5px solid #E2E8F0',
              borderTopLeftRadius: 6,
              borderBottomLeftRadius: 6,
              cursor: disabled ? 'not-allowed' : 'pointer',
              color: '#0A2362',
              fontWeight: 700,
              fontSize: compact ? '0.8125rem' : '0.875rem',
              outline: 'none',
              userSelect: 'none',
              whiteSpace: 'nowrap'
            }}
          >
            <span style={{ fontSize: '1.1rem', lineHeight: 1 }} role="img" aria-label={selectedCountry.name}>
              {selectedCountry.flag}
            </span>
            <span style={{ fontSize: '0.8125rem', color: '#0A2362', fontWeight: 800, letterSpacing: '0.02em' }}>
              {selectedCountry.code}
            </span>
            <span style={{ letterSpacing: '0.01em', color: '#0A2362', fontWeight: 700 }}>
              {selectedCountry.dialCode}
            </span>
            <ChevronDown
              size={14}
              style={{
                color: '#64748B',
                transition: 'transform 0.2s ease',
                transform: isOpen ? 'rotate(180deg)' : 'none'
              }}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div
              className="hybeq-country-dropdown"
              style={{
                position: 'absolute',
                top: 'calc(100% + 4px)',
                left: 0,
                zIndex: 9999,
                width: 280,
                maxHeight: 260,
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                boxShadow: '0 12px 32px rgba(10, 35, 98, 0.16)',
                border: '1.5px solid #DFE6EF',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Search Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 12px',
                  backgroundColor: '#F8FAFC',
                  borderBottom: '1px solid #E2E8F0'
                }}
              >
                <Search size={14} style={{ color: '#64748B' }} />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search country or code..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    outline: 'none',
                    fontSize: '0.8125rem',
                    color: '#0A2362',
                    width: '100%'
                  }}
                />
              </div>

              {/* Country List */}
              <div style={{ overflowY: 'auto', flex: 1, padding: '4px 0' }} role="listbox">
                {filteredCountries.length === 0 ? (
                  <div style={{ padding: '12px', fontSize: '0.8125rem', color: '#64748B', textAlign: 'center' }}>
                    No countries found
                  </div>
                ) : (
                  filteredCountries.map(country => (
                    <button
                      key={country.code}
                      type="button"
                      role="option"
                      aria-selected={country.code === selectedCountry.code}
                      onClick={() => {
                        onCountryChange(country);
                        setIsOpen(false);
                        setSearchQuery('');
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: '8px 12px',
                        border: 'none',
                        background: country.code === selectedCountry.code ? '#EAF8F0' : 'transparent',
                        color: country.code === selectedCountry.code ? '#0A2362' : '#334155',
                        cursor: 'pointer',
                        fontSize: '0.8125rem',
                        fontWeight: country.code === selectedCountry.code ? 700 : 500,
                        textAlign: 'left',
                        transition: 'background-color 0.15s ease'
                      }}
                      onMouseEnter={e => {
                        if (country.code !== selectedCountry.code) {
                          e.currentTarget.style.backgroundColor = '#F1F5F9';
                        }
                      }}
                      onMouseLeave={e => {
                        if (country.code !== selectedCountry.code) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontSize: '1.05rem', lineHeight: 1 }}>{country.flag}</span>
                        <span>{country.name}</span>
                      </div>
                      <span style={{ color: '#64748B', fontWeight: 600, fontSize: '0.75rem' }}>
                        {country.dialCode}
                      </span>
                    </button>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Numeric Phone Number Input */}
        <input
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          value={phone}
          onChange={handleInputChange}
          placeholder={placeholder}
          disabled={disabled}
          style={{
            flex: 1,
            minWidth: 0,
            padding: compact ? '9px 12px' : '11px 14px',
            border: 'none',
            outline: 'none',
            fontSize: compact ? '0.875rem' : '0.9375rem',
            color: '#071A45',
            backgroundColor: 'transparent',
            fontWeight: 600,
            letterSpacing: '0.02em',
            borderTopRightRadius: 6,
            borderBottomRightRadius: 6
          }}
        />
      </div>

      {/* Error Message */}
      {error && (
        <span
          style={{
            color: '#EF4444',
            fontSize: '0.75rem',
            marginTop: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 4
          }}
        >
          <AlertCircle size={12} /> {error}
        </span>
      )}
    </div>
  );
};

