module ImprovedInitiative {
    export class StatBlockListing {
        Name: KnockoutObservable<string>;
        IsLoaded: boolean;
        StatBlock: KnockoutObservable<IStatBlock>;
        constructor(public Id: string, name: string, public Type: string, public Link: string, public Source: string, statBlock?: IStatBlock) {
            this.Name = ko.observable(name);
            this.IsLoaded = !!statBlock;
            this.StatBlock = ko.observable(statBlock || StatBlock.Empty(c => { c.Name = name }));
            this.StatBlock.subscribe(newStatBlock => {
                this.Name(newStatBlock.Name);
                this.Type = newStatBlock.Type;
            });
        }

        LoadStatBlock = (callback: (listing: StatBlockListing) => void) => {
            if (this.IsLoaded) {
                callback(this);
            }
            else {
                $.getJSON(this.Link, (json) => {
                    this.IsLoaded = true;
                    this.StatBlock($.extend(StatBlock.Empty(), json));
                    callback(this);
                });
            }
        }
    }
}