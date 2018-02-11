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
            'onTwigSiteVariables' => ['onTwigSiteVariables', 0],
            'onPageInitialized' => ['onPageInitialized', 0]
        ]);
    }

    public function onTwigSiteVariables()
    {
        // Asset cache busting handler
        $manifest = __DIR__ . '/dist/mix-manifest.json';

        if (file_exists($manifest)) {
            $assets = json_decode(file_get_contents($manifest), true);
            $this->grav['assets']->addJs('theme://dist/' . $assets['/js/app.js'],10);
            $this->grav['assets']->addCss('theme://dist/' . $assets['/css/app.css'],10);
        }

        // Add jquery if debugger is enabled
        if ($this->config->get('system.debugger.enabled')) {
            $this->grav['assets']->addJs('jquery',101);
        }
    }

    public function onPageInitialized()
    {
        // Redirect to external_url if external page template
        $template = $this->grav['page']->template();
        if ($template === 'external' && isset($this->grav['page']->header()->external_url)) {
            $url = $this->grav['page']->header()->external_url;
            $this->grav->redirect($url);
        }
    }
}
