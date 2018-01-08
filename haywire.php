<?php
namespace Grav\Theme;

use Grav\Common\Theme;

class Haywire extends Theme
{
    public static function getSubscribedEvents()
    {
        return [
            'onThemeInitialized' => ['onThemeInitialized', 0]
        ];
    }

    public function onThemeInitialized()
    {
        if ($this->isAdmin()) {
            $this->active = false;
            return;
        }

        $this->enable([
            'onTwigSiteVariables' => ['onTwigSiteVariables', 0]
        ]);
    }

    public function onTwigSiteVariables()
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
