
/**
 * Import Environemts & Configure
 */

// Import Facile.
import { facile } from 'facile';

// Import Configurations.
import './debug';
import './development';
import './production';
import './test';

// Call Facile Configure
// Accepts config object name of registered config.
// If using facile-cli there leave blank.
facile.configure('development');

