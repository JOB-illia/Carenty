export type v_subheading = 'subheading-1' | 'subheading-2' | 'subheading-3';
export type text = 'text-1' | 'text-2' | 'text-3' | 'text-4';
export type v_heading =
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'heading-4'
  | 'heading-5'
  | 'heading-6';

export type response_typography = Record<
  v_heading & v_subheading & text,
  { size: number; height: number }
>;

export type TThemeColors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'outline'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link';

export enum ThemeColors {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  info = 'info',
  light = 'light',
  dark = 'dark',
  link = 'link',
  outline = 'outline',
}

// // scss-docs-start theme-color-variables
// $primary:       $blue; // Change your color here,
// $secondary:     $gray-600;
// $success:       $green;
// $info:          $cyan;
// $warning:       $yellow;
// $danger:        $red;
// $light:         $gray-100;
// $dark:          $gray-900;
// $footer:        #212f40;
// // scss-docs-end theme-color-variables
//
// // scss-docs-start theme-colors-map
// $theme-colors: (
//   "primary":    $primary,
//   "secondary":  $secondary,
//   "success":    $success,
//   "info":       $info,
//   "warning":    $warning,
//   "danger":     $danger,
//   "light":      $light,
//   "dark":       $dark,
//   "footer":     $footer,
//   "muted":      $muted
// );
// s
