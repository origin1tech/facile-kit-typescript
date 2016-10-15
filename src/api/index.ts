import { facile } from 'facile';

// Import the configuration.
// This contains all settings for
// the server along with middleware,
// security filters, services and
// localization.
import './config';

// Import Services.
import './services';

// Import Security Filters.
import './filters';

// Import all application entities
// which contains routing, controllers,
// security policies and modeling.
import './entities';

// Import Routes
import './routes';

// Call configure.
// If using facile-cli there's no
// need to pass a config to "configure"
// Otherwise pass a specific environment
// config or Facile will look for "development".
// If doesn't exist defaults are used.
facile.start('debug');

