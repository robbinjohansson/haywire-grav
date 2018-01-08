<?php
namespace Grav\Theme;

use Grav\Common\Theme;

class Haywire extends Theme
{
    public static function getSubscribedEvents()
    {
        return [
            'onAssetsInitialized' => ['onAssetsInitialized', 0]
        ];
    }
    public function onAssetsInitialized()
    {
        $path = $this->grav['base_url'] . $this->config['theme']['assetPath'];
        $manifest = __DIR__ . '/dist/mix-manifest.json';

        if (file_exists($manifest)) {
            $assets = json_decode(file_get_contents($manifest), true);
            $this->grav['assets']->addJs($path . $assets['/js/app.js'], ['group' => 'bottom']);
            $this->grav['assets']->addCss($path . $assets['/css/app.css']);
        }
    }
}
