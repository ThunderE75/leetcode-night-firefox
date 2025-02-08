const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '../dist/manifest.json');

try {
    const manifestData = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

    if (manifestData.web_accessible_resources) {
        manifestData.web_accessible_resources = manifestData.web_accessible_resources.map(resource => {
            if (resource.use_dynamic_url !== undefined) {
                delete resource.use_dynamic_url;
            }
            return resource;
        });
    }

    fs.writeFileSync(manifestPath, JSON.stringify(manifestData, null, 2));
    console.log('✅ Successfully removed "use_dynamic_url" from manifest.json');
} catch (error) {
    console.error('❌ Error modifying manifest.json:', error);
    process.exit(1);
}
