require 'rack/static'

use Rack::Static, urls: [''], root: 'public', index: 'index.html'

run ->(env) {
  [404, { 'Content-Type' => 'text/html', 'Content-Length' => '9' }, ['Not Found']]
}
