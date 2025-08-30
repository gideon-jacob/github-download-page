"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadPageRouter = void 0;
const express_1 = __importStar(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const shields_io_1 = __importDefault(require("./helpers/shields-io"));
const github_1 = __importDefault(require("./helpers/github"));
const date_fns_1 = require("date-fns");
const downloadPageRouter = (options) => {
    const router = (0, express_1.Router)();
    const siteConfiguration = options !== null && options !== void 0 ? options : {
        application: {
            name: "PEC Events App",
            description: "This is a download page for your GitHub project inspired by Google Play Store. As an example I have used the material components for android catalog app to showcase this site. Click the GitHub link in the navigation bar to get your own copy.",
            github: "gideon-jacob/pec-events-app",
            info: {
                minimumRequirement: 'Android 5.0+',
                releasedOn: new Date(2023, 10, 1),
            }
        },
        developer: {
            name: "Gideon Jacob",
            website: "https://gideonjacob.com"
        },
        site: {
            primaryColor: "#03875F",
            links: [
                {
                    name: "Developer",
                    href: "https://gideonjacob.com"
                },
                {
                    name: "GitHub",
                    href: "https://github.com/gideon-jacob/pec-events-app"
                },
                {
                    name: "Donate",
                    href: "https://gideonjacob.com/donate"
                }
            ],
        },
        privacyPolicy: {
            lastUpdated: new Date(2025, 7, 28),
            body: [
                {
                    "heading": "Introduction",
                    "content": [
                        "Welcome to the Prathyusha Events App (\"we,\" \"us,\" or \"our\"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the \"App\"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application."
                    ]
                },
                {
                    "heading": "Information We Collect",
                    "content": [
                        "We may collect information about you in a variety of ways. The information we may collect via the App depends on the content and materials you use, and includes:",
                        "### Personal Data",
                        "**Student Information:** To create an account, we require your full name, college registration number, department, and a valid college email address.",
                        "**Publisher Information:** For faculty and club coordinators, we collect your name and department to create a publisher account.",
                        "### Usage Data",
                        "**App Activity:** We may collect information about your interactions with the App, such as which events you view and your responses to interest polls (\"Yes/No\"). This data is used to provide analytics to event organizers.",
                        "**Device Information:** We automatically collect certain information about your mobile device, including your device's unique ID and operating system, to send push notifications."
                    ]
                },
                {
                    "heading": "How We Use Your Information",
                    "content": [
                        "Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the App to:",
                        "- Create and manage your account.",
                        "- Deliver push notifications about new events to your device.",
                        "- Provide event organizers with anonymized interest analytics to help them plan better.",
                        "- Monitor and analyze usage and trends to improve your experience with the App.",
                        "- Ensure the security and operational functionality of our services."
                    ]
                },
                {
                    "heading": "Disclosure of Your Information",
                    "content": [
                        "We do not sell, trade, or rent your personal identification information to others. We may share information we have collected about you in certain situations. Your information may be disclosed as follows:",
                        "### By Law or to Protect Rights",
                        "If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.",
                        "### Third-Party Service Providers",
                        "We may share your information with third parties that perform services for us or on our behalf, including data storage, hosting services, and push notification delivery. Our main service providers are:",
                        "- Supabase: For database management and user authentication.",
                        "- Amazon Web Services (AWS): For backend hosting (Lambda), file storage (S3), and content delivery (CloudFront).",
                        "- Native Notify: For sending push notifications.",
                        "These third-party vendors have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."
                    ]
                },
                {
                    "heading": "Security of Your Information",
                    "content": [
                        "We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse."
                    ]
                },
                {
                    "heading": "Your Rights and Choices",
                    "content": [
                        "You may at any time review or change the information in your account or terminate your account by:",
                        "- Logging into your account settings and updating your account.",
                        "- Contacting us using the contact information provided below to request deletion of your account.",
                        "Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases."
                    ]
                },
                {
                    "heading": "Changes to This Privacy Policy",
                    "content": [
                        "We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page."
                    ]
                },
                {
                    "heading": "Contact Us",
                    "content": [
                        "If you have questions or comments about this Privacy Policy, please contact us at: [developerspec25@gmail.com](mailto:developerspec25@gmail.com)"
                    ]
                }
            ]
        },
    };
    const getTagName = () => __awaiter(void 0, void 0, void 0, function* () {
        if (siteConfiguration.application.tagName) {
            return siteConfiguration.application.tagName;
        }
        const release = yield github_1.default.getLatestRelease(siteConfiguration.application.github);
        return release['tag_name'];
    });
    const getRelease = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!siteConfiguration.application.tagName) {
            return yield github_1.default.getLatestRelease(siteConfiguration.application.github);
        }
        const tagName = yield getTagName();
        return yield github_1.default.getReleaseByTag(siteConfiguration.application.github, tagName);
    });
    const loadIndex = (req, statusCode, route = undefined) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c;
        let index = fs_1.default.readFileSync(__dirname + '/frontend/build/index.html').toString();
        const extendedSiteConfiguration = Object.assign(Object.assign({}, siteConfiguration), { application: Object.assign(Object.assign({}, siteConfiguration.application), { info: Object.assign(Object.assign({}, siteConfiguration.application.info), { releasedOnString: (0, date_fns_1.format)(siteConfiguration.application.info.releasedOn, 'MMM d, yyyy') }) }), site: Object.assign(Object.assign({}, siteConfiguration.site), { basePath: req.baseUrl, statusCode: statusCode }), privacyPolicy: !siteConfiguration.privacyPolicy
                ? undefined
                : typeof siteConfiguration.privacyPolicy === 'string'
                    ? siteConfiguration.privacyPolicy
                    : Object.assign(Object.assign({}, siteConfiguration.privacyPolicy), { lastUpdatedString: (0, date_fns_1.format)(siteConfiguration.privacyPolicy.lastUpdated, 'MMMM d, yyyy') }) });
        if (statusCode === 200) {
            switch (route) {
                case '/privacy-policy':
                    index = index.replace(/__SITE_TITLE__/g, 'Privacy Policy');
                    index = index.replace(/__SITE_DESCRIPTION__/g, '');
                default:
                    const release = yield getRelease();
                    if ((_a = release['assets'][0]) === null || _a === void 0 ? void 0 : _a['size']) {
                        extendedSiteConfiguration.application.size = (_b = release['assets'][0]) === null || _b === void 0 ? void 0 : _b['size'];
                    }
                    extendedSiteConfiguration.application.downloads = yield github_1.default.getDownloadCount(siteConfiguration.application.github);
                    extendedSiteConfiguration.application.tagName = (_c = siteConfiguration.application.tagName) !== null && _c !== void 0 ? _c : yield getTagName();
                    extendedSiteConfiguration.application.info.releasedOnString = (0, date_fns_1.format)(siteConfiguration.application.info.releasedOn, 'MMM d, yyyy'),
                        extendedSiteConfiguration.application.info.updatedOnString = (0, date_fns_1.format)(new Date(release['published_at']), 'MMM d, yyyy');
                    index = index.replace(/__SITE_TITLE__/g, `${siteConfiguration.application.name} - ${siteConfiguration.developer.name}`);
                    index = index.replace(/__SITE_DESCRIPTION__/g, siteConfiguration.application.description);
            }
        }
        else if (statusCode === 404) {
            index = index.replace(/__SITE_TITLE__/g, '404 - Page Not Found');
            index = index.replace(/__SITE_DESCRIPTION__/g, '');
        }
        else if (statusCode === 500) {
            index = index.replace(/__SITE_TITLE__/g, '500 - Internal Server Error');
            index = index.replace(/__SITE_DESCRIPTION__/g, '');
        }
        else {
            index = index.replace(/__SITE_TITLE__/g, `${statusCode} - An Error Occurred`);
            index = index.replace(/__SITE_DESCRIPTION__/g, '');
        }
        index = index.replace(/__SITE_THEME_COLOR__/g, siteConfiguration.site.primaryColor);
        index = index.replace(/__SITE_CONFIGURATION__/, encodeURIComponent(JSON.stringify(extendedSiteConfiguration)));
        return index;
    });
    router.use('/', express_1.default.static(path_1.default.join(__dirname, '/frontend/build'), { index: false }));
    router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            res.status(200).send(yield loadIndex(req, 200, '/'));
        }
        catch (error) {
            res.status(500).send(yield loadIndex(req, 500));
        }
    }));
    router.get('/privacy-policy', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!siteConfiguration.privacyPolicy) {
                res.status(404).send(yield loadIndex(req, 404));
            }
            else if (typeof siteConfiguration.privacyPolicy === 'string') {
                res.status(200).redirect(siteConfiguration.privacyPolicy);
            }
            else {
                res.status(200).send(yield loadIndex(req, 200, '/privacy-policy'));
            }
        }
        catch (error) {
            res.status(500).send(yield loadIndex(req, 500));
        }
    }));
    router.get('/download', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!siteConfiguration.application.downloadLink) {
                const release = yield getRelease();
                res.redirect(release['assets'][0]['browser_download_url']);
            }
            else {
                res.redirect(siteConfiguration.application.downloadLink);
            }
        }
        catch (error) {
            res.status(500).send(yield loadIndex(req, 500));
        }
    }));
    router.get('/about.json', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const tagName = yield getTagName();
            const release = yield getRelease();
            const about = Object.assign({ downloads: yield github_1.default.getDownloadCount(siteConfiguration.application.github), updatedOn: release['published_at'], releaseNotes: release['body'], tagName: tagName }, siteConfiguration.application.aboutJson);
            res.status(200).json(about);
        }
        catch (error) {
            res.status(500).send(yield loadIndex(req, 500));
        }
    }));
    router.get('/release.svg', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            res.setHeader('Content-type', 'image/svg+xml');
            res.status(200).send(yield shields_io_1.default.createReleaseBadge(yield getTagName()));
        }
        catch (error) {
            res.status(500).send(yield loadIndex(req, 500));
        }
    }));
    router.get('/downloads.svg', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const downloadCount = yield github_1.default.getDownloadCount(siteConfiguration.application.github);
            res.setHeader('Content-type', 'image/svg+xml');
            res.status(200).send(yield shields_io_1.default.createDownloadsBadge(downloadCount));
        }
        catch (error) {
            res.status(500).send(yield loadIndex(req, 500));
        }
    }));
    router.get('/*', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            res.status(404).send(yield loadIndex(req, 404));
        }
        catch (error) {
            res.status(500).send(yield loadIndex(req, 500));
        }
    }));
    return router;
};
exports.downloadPageRouter = downloadPageRouter;
