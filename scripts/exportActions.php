<?php

// URL of the remote php file
$remoteUrl = 'https://gitlab.com/eternaltwin/myhordes/myhordes/-/raw/master/packages/myhordes-fixtures/src/templates/Service/ActionDataService.php';

// Local path to save the fetched php file
$localFilePath = __DIR__ . '/data/ActionDataService.php';

// Fetch the remote file and save it locally
file_put_contents($localFilePath, file_get_contents($remoteUrl));

// Read the contents of the fetched file
$fileContents = file_get_contents($localFilePath);

// Remove lines starting with 'use'
$fileContents = preg_replace('/^use\s.*;\s*$/m', '', $fileContents);

// Remove 'implements' from the class declaration
$fileContents = preg_replace('/implements\s+\w+\s*/', '', $fileContents);

// Replace ActionRequirementProvider::create($data); with an empty object
$fileContents = str_replace('ActionRequirementProvider::create($data);', '[];', $fileContents);

// Replace ActionEffectProvider::create($data); with [];
$fileContents = str_replace('ActionEffectProvider::create($data);', '[];', $fileContents);

// Remove lines starting with 'array_walk_recursive('
$fileContents = preg_replace('/^array_walk_recursive\(.*\);\s*$/m', '', $fileContents);

// Replace $requirement_container->toArray() with []
$fileContents = str_replace('$requirement_container->toArray()', '[]', $fileContents);

// Replace $effects_container->toArray() with []
$fileContents = str_replace('$effects_container->toArray()', '[]', $fileContents);

// Add missing dependencies after the namespace declaration
$missingDependencies = <<<'CLASS'
class ItemAction
{
    const PoisonHandlerIgnore = 0;
    const PoisonHandlerTransgress = 1;
    const PoisonHandlerConsume = 2;
}

class ItemTargetDefinition
{
    const int ItemSelectionType = 0;
    const int ItemTypeSelectionType = 1;
    const int ItemHeroicRescueType = 2;
    const int ItemCitizenType = 3;
    const int ItemCitizenOnZoneType = 4;
    const int ItemCitizenOnZoneSBType = 5;
    const int ItemSelectionTypePoison = 6;
    const int ItemCitizenVoteType = 7;
    const int ItemFriendshipType = 8;
    const int ItemTypeChestSelectionType = 9;
    const int ItemFriendshipXPType = 10;
    const int ItemCitizenOnZoneSMType = 11;
}

class ActionCatapultProvider
{
    public static function create(): array
    {
        return [];
    }
}

enum CitizenProperties: string
{
    //<editor-fold desc="Enabled Features">
    case Section_Features = '--section--/Features';
    case EnableBlackboard = 'features.blackboard';
    case EnableGroupMessages = 'features.group_messages';
    case EnableBuildingRecommendation = 'features.building_recommendation';
    case EnableProWatchman = 'features.pro.watchman';
    case EnableProCamper = 'features.pro.camper';
    case EnableAdvancedTheft = 'features.advanced_theft';
    case EnableClairvoyance = 'features.clairvoyance.base';
    case EnableOmniscience = 'features.clairvoyance.expanded';

    //</editor-fold>

    //<editor-fold desc="Property Values">
    case Section_Properties = '--section--/Properties';
    case TownDefense = 'props.town_defense';
    case WatchDefense = 'props.watch_defense';
    case AnonymousMessageLimit = 'props.limit.anonymous.messages';
    case AnonymousPostLimit = 'props.limit.anonymous.posts';
    case ComplaintLimit = 'props.limit.anonymous.complaint';
    case LogManipulationLimit = 'props.limit.log_manipulation';
    case LogPurgeLimit = 'props.limit.log_purge';
    case WatchSurvivalBonus = 'props.bonus.watch.survival';
    case ZoneControlBonus = 'props.bonus.zone_control.base';
    case ZoneControlCleanBonus = 'props.bonus.zone_control.clean';
    case ZoneControlHydratedBonus = 'props.bonus.zone_control.hydrated';
    case ZoneControlSoberBonus = 'props.bonus.zone_control.sober';
    case InventorySpaceBonus = 'props.bonus.rucksack_space';
    case OxygenTimeBonus = 'props.bonus.oxygen_time';
    case ChestSpaceBonus = 'props.bonus.chest_space';
    case HeroPunchKills = 'props.actions.hero_punch.kills';
    case HeroPunchEscapeTime = 'props.actions.hero_punch.escape';
    case HeroSecondWindBaseSP = 'props.actions.hero_sw.sp';
    case HeroSecondWindBonusAP = 'props.actions.hero_sw.ap';
    case HeroRescueRange = 'props.actions.hero_rescue.range';
    case HeroReturnRange = 'props.actions.hero_return.range';
    case HeroImmuneStatusList = 'props.actions.hero_immune.protection';
    case HeroImmuneHeals = 'props.actions.hero_immune.heals';
    case ProCamperUsageLimit = 'props.limit.camping.pro';
    case CampingChanceCap = 'props.limit.camping.cap';
    case TrashSearchLimit = 'props.limit.trash.count';
    case ChestHiddenStashLimit = 'props.limit.chest.hidden.count';
    //</editor-fold>

    //<editor-fold desc="Config Values">
    case Section_Config = '--section--/Config';
    case RevengeItems = 'config.revenge_items';
    case StatusOverrideMap = 'config.status_override_map';
    //</editor-fold>

    case ActiveSkillIDs = 'skills.list';

    public function translationKey(): string
    {
        return "cfg_ctp_" . str_replace(".", "_", $this->value);
    }
}

CLASS;

$fileContents = preg_replace('/(namespace\s+[^;]+;\s*)/', '$1' . $missingDependencies, $fileContents);

// Save the modified contents back to the file
file_put_contents($localFilePath, $fileContents);


// Include the fetched php file
require_once $localFilePath;

use MyHordes\Fixtures\Service\ActionDataService;

// Initialize the data array
$data = [];

// Create an instance of ActionDataService
$actionDataService = new ActionDataService();

// Process the data
$actionDataService->process($data);

// Convert the data array to JSON
$json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

// Define the output file path
$outputFilePath = __DIR__ . '/data/actions.json';

// Write the JSON to a file
file_put_contents($outputFilePath, $json);

echo "JSON data has been exported to $outputFilePath\n";
