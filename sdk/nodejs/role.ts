// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

export class Role extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'aws-iam:index:Role';

    /**
     * Returns true if the given object is an instance of Role.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Role {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Role.__pulumiType;
    }


    /**
     * Create a Role resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoleArgs, opts?: pulumi.ComponentResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            resourceInputs["assume_role_policy"] = args ? args.assume_role_policy : undefined;
            resourceInputs["env"] = args ? args.env : undefined;
            resourceInputs["managed_policy_arns"] = args ? args.managed_policy_arns : undefined;
            resourceInputs["max_session_duration"] = args ? args.max_session_duration : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["name_is_prefix"] = args ? args.name_is_prefix : undefined;
            resourceInputs["policy_statements"] = args ? args.policy_statements : undefined;
        } else {
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Role.__pulumiType, name, resourceInputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a Role resource.
 */
export interface RoleArgs {
    /**
     * Policy that grants an entity permission to assume the role.
     */
    assume_role_policy?: pulumi.Input<string>;
    /**
     * Environment used for role path.
     */
    env?: pulumi.Input<string>;
    /**
     * ARNs of IAM managed policies.
     */
    managed_policy_arns?: pulumi.Input<pulumi.Input<inputs.PolicyStatementArgs>[]>;
    /**
     * Maximum session duration (in seconds) that you want to set for the specified role.
     */
    max_session_duration?: pulumi.Input<number>;
    /**
     * Name of Role or Policy.
     */
    name: pulumi.Input<string>;
    name_is_prefix?: pulumi.Input<boolean>;
    /**
     * Policy statements for access.
     */
    policy_statements?: pulumi.Input<string>;
}
