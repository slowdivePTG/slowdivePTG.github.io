# ORCID Icon Integration

This directory contains the ORCID icon designed to integrate seamlessly with the existing IcoMoon icon system used throughout the site.

## Files Created

1. **`assets/orcid-icon.svg`** - Main ORCID icon SVG file optimized for web use
2. **`assets/orcid-icon-compact.svg`** - Compact version with single path element
3. **`assets/orcid-glyph.xml`** - Glyph definition for IcoMoon font integration
4. **`orcid-icon-demo.html`** - Demo page showing integration and usage
5. **Updated `_sass/icon-icomoon.scss`** - Added ORCID icon styling

## Design Principles

The ORCID icon follows the same design language as existing IcoMoon icons:

- **Geometric simplicity**: Clean, minimal design that scales well
- **Monochrome base**: Uses `currentColor` for theme integration
- **Brand color on hover**: ORCID brand green (#A6CE39) on hover
- **Consistent sizing**: 1024×1024 viewBox matching other icons
- **Optimized paths**: Single compound path for performance

## Integration Options

### Option 1: Standalone SVG (Current Implementation)
The icon can be used as a standalone SVG with CSS mask styling:

```css
.icon-orcid {
    background: currentColor;
    mask: url('./assets/orcid-icon.svg') no-repeat center;
    mask-size: contain;
}
```

### Option 2: Font Integration (Recommended)
For full integration with the existing IcoMoon system:

1. Import `assets/orcid-glyph.xml` into IcoMoon.io
2. Assign Unicode point `\ead4` 
3. Regenerate font files (eot, ttf, woff, svg)
4. Use existing SCSS structure:

```scss
$icon-orcid: "\ead4";

.icon-orcid {
    &:before {
        content: $icon-orcid;
    }
    
    &:hover {
        color: #A6CE39;
    }
}
```

## Usage Examples

### HTML
```html
<a href="https://orcid.org/0000-0000-0000-0000" class="icon-orcid">ORCID Profile</a>
```

### In Author Bio
```html
<div class="author-meta">
    <a href="mailto:user@example.com" class="icon-mail">Mail</a>
    <a href="https://github.com/username" class="icon-github">Github</a>
    <a href="https://orcid.org/0000-0000-0000-0000" class="icon-orcid">ORCID</a>
</div>
```

## Technical Specifications

- **Unicode Point**: `\ead4` (following sequence after `\ead3`)
- **Brand Color**: `#A6CE39` (official ORCID green)
- **Dimensions**: 1024×1024 units
- **Format**: SVG with single compound path
- **Compatibility**: Works with existing hover effects and transitions

## Demo

Open `orcid-icon-demo.html` in a browser to see the icon in action with proper styling and hover effects.

## Notes

- The icon represents the ORCID "iD" logo in a simplified, scalable format
- Designed to maintain readability at small sizes (16px and up)
- Follows accessibility guidelines with proper contrast
- Compatible with both light and dark themes via `currentColor`