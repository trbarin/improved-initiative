module ImprovedInitiative {
  export class Command {
    Description: string;
    KeyBinding: string;
    ActionBarIcon: string;
    GetActionBinding: () => any;
    ShowOnActionBar: KnockoutObservable<boolean>;
  }
  
  export var BuildCommandList = (v: TrackerViewModel) => [
      { Description: 'Roll Initiative', 
        KeyBinding: 'alt+r',
        ActionBarIcon: 'fa-play', 
        GetActionBinding: () => v.Encounter().RollInitiative,
        ShowOnActionBar: ko.observable(true) },
      { Description: 'Open Creature Library', 
        KeyBinding: 'alt+a',
        ActionBarIcon: 'fa-user-plus', 
        GetActionBinding: () => v.ShowLibraries,
        ShowOnActionBar: ko.observable(true) },
      { Description: 'Show Player Window', 
        KeyBinding: 'alt+w',
        ActionBarIcon: 'fa-users', 
        GetActionBinding: () => v.LaunchPlayerWindow,
        ShowOnActionBar: ko.observable(true) },
      { Description: 'Select Next Combatant', 
        KeyBinding: 'j',
        ActionBarIcon: 'fa-arrow-down', 
        GetActionBinding: () => v.Encounter().SelectNextCombatant,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Select Previous Combatant', 
        KeyBinding: 'k',
        ActionBarIcon: 'fa-arrow-up', 
        GetActionBinding: () => v.Encounter().SelectPreviousCombatant,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Next Turn', 
        KeyBinding: 'n',
        ActionBarIcon: 'fa-step-forward', 
        GetActionBinding: () => v.Encounter().NextTurn,
        ShowOnActionBar: ko.observable(true) },
      { Description: 'Previous Turn', 
        KeyBinding: 'alt+n',
        ActionBarIcon: 'fa-step-backward', 
        GetActionBinding: () => v.Encounter().PreviousTurn,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Damage/Heal Selected Combatant', 
        KeyBinding: 't',
        ActionBarIcon: 'fa-plus-circle', 
        GetActionBinding: () => v.Encounter().FocusSelectedCreatureHP,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Add Note to Selected Combatant', 
        KeyBinding: 'g',
        ActionBarIcon: 'fa-tag', 
        GetActionBinding: () => v.Encounter().AddSelectedCreatureTag,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Remove Selected Combatant from Encounter', 
        KeyBinding: 'del',
        ActionBarIcon: 'fa-remove', 
        GetActionBinding: () => v.Encounter().RemoveSelectedCreatures,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Rename Selected Combatant', 
        KeyBinding: 'f2',
        ActionBarIcon: 'fa-i-cursor', 
        GetActionBinding: () => v.Encounter().EditSelectedCreatureName,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Edit Selected Combatant', 
        KeyBinding: 'alt+e',
        ActionBarIcon: 'fa-edit', 
        GetActionBinding: () => v.Encounter().EditSelectedCreature,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Edit Selected Combatant Initiative', 
        KeyBinding: 'alt+i',
        ActionBarIcon: 'fa-play-circle-o', 
        GetActionBinding: () => v.Encounter().EditSelectedCreatureInitiative,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Move Selected Combatant Down', 
        KeyBinding: 'alt+j',
        ActionBarIcon: 'fa-angle-double-down', 
        GetActionBinding: () => v.Encounter().MoveSelectedCreatureDown,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Move Selected Combatant Up', 
        KeyBinding: 'alt+k',
        ActionBarIcon: 'fa-angle-double-up', 
        GetActionBinding: () => v.Encounter().MoveSelectedCreatureUp,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Add Temporary HP', 
        KeyBinding: 'alt+t',
        ActionBarIcon: 'fa-medkit', 
        GetActionBinding: () => v.Encounter().AddSelectedCreaturesTemporaryHP,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Save Encounter', 
        KeyBinding: 'alt+s',
        ActionBarIcon: 'fa-save', 
        GetActionBinding: () => v.SaveEncounter,
        ShowOnActionBar: ko.observable(true) },
      { Description: 'Show Help and Keybindings', 
        KeyBinding: '?',
        ActionBarIcon: 'fa-question-circle', 
        GetActionBinding: () => v.ToggleCommandDisplay,
        ShowOnActionBar: ko.observable(true) }
    ]
}