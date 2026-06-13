const path = require('path');
const ghpages = require('gh-pages');
const pkg = require('../package.json');

const distDir = path.resolve(__dirname, '../dist');
const repo = 'https://github.com/mateusas96/mamos.git';

let cname;
try {
    cname = pkg.homepage ? new URL(pkg.homepage).hostname : undefined;
} catch {
    cname = undefined;
}

const options = {
    branch: 'gh-pages',
    repo,
    nojekyll: true,
    ...(cname ? { cname } : {}),
    ...(process.env.GH_PAGES_NO_PUSH === '1' ? { push: false } : {}),
};

ghpages.publish(distDir, options, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    if (process.env.GH_PAGES_NO_PUSH === '1') {
        console.log('gh-pages dry run finished (push disabled).');
        return;
    }

    console.log('Published to gh-pages branch.');
});
