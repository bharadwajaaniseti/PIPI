import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cookie, Settings, BarChart3, Shield, Mail } from 'lucide-react';

export default function CookiesPage() {
  return (
    <div className="py-16">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-lime/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Cookie className="h-8 w-8 text-lime" />
          </div>
          <h1 className="font-tenor text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            This policy explains how we use cookies and similar technologies to improve your browsing experience on our website.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: September 14, 2025
          </p>
        </div>

        <div className="space-y-8">
          {/* What Are Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>What Are Cookies?</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p>
                Cookies are small text files that are stored on your computer or mobile device when you visit our website.
                They help us provide you with a better browsing experience by remembering your preferences and understanding
                how you use our site.
              </p>
              <p>
                Cookies can be "persistent" (they remain on your device for a set period) or "session" cookies
                (they are deleted when you close your browser).
              </p>
            </CardContent>
          </Card>

          {/* Types of Cookies We Use */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Settings className="h-6 w-6 text-lime" />
                <span>Types of Cookies We Use</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-lime">Essential Cookies</h4>
                <p className="text-gray-600 mb-3">
                  These cookies are necessary for the website to function properly. They cannot be disabled.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Session Management:</strong> Maintain your login status and shopping cart</li>
                  <li><strong>Security:</strong> Protect against security threats and fraud</li>
                  <li><strong>Load Balancing:</strong> Ensure website performance and availability</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Functional Cookies</h4>
                <p className="text-gray-600 mb-3">
                  These cookies enhance your experience by remembering your preferences and settings.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Language Preferences:</strong> Remember your language selection</li>
                  <li><strong>Location Settings:</strong> Store your location for localized content</li>
                  <li><strong>Form Data:</strong> Save information you've entered in forms</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 text-purple-600">Analytics Cookies</h4>
                <p className="text-gray-600 mb-3">
                  These cookies help us understand how visitors use our website so we can improve it.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Google Analytics:</strong> Track page views, session duration, and user behavior</li>
                  <li><strong>Conversion Tracking:</strong> Measure the effectiveness of our marketing campaigns</li>
                  <li><strong>Error Monitoring:</strong> Identify and fix technical issues</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 text-orange-600">Marketing Cookies</h4>
                <p className="text-gray-600 mb-3">
                  These cookies are used to deliver relevant advertisements and track campaign performance.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Retargeting:</strong> Show relevant ads based on your browsing history</li>
                  <li><strong>Social Media:</strong> Enable social media sharing and tracking</li>
                  <li><strong>Campaign Measurement:</strong> Track the success of marketing campaigns</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We may use third-party services that set their own cookies. These include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Google Analytics:</strong> Web analytics and reporting</li>
                <li><strong>Google Maps:</strong> Interactive maps and location services</li>
                <li><strong>Social Media Platforms:</strong> Social sharing and engagement</li>
                <li><strong>Payment Processors:</strong> Secure payment processing</li>
                <li><strong>Content Delivery Networks:</strong> Fast content delivery</li>
              </ul>
              <p className="text-gray-600 mt-4">
                These third parties have their own privacy policies and cookie practices. We encourage you to review their policies.
              </p>
            </CardContent>
          </Card>

          {/* How to Manage Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <BarChart3 className="h-6 w-6 text-lime" />
                <span>How to Manage Cookies</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                You can control and manage cookies in various ways:
              </p>

              <div>
                <h4 className="font-semibold text-lg mb-3">Browser Settings</h4>
                <p className="text-gray-600 mb-3">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Block all cookies</li>
                  <li>Block third-party cookies</li>
                  <li>Delete existing cookies</li>
                  <li>Receive notifications before cookies are set</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Cookie Consent Banner</h4>
                <p className="text-gray-600 mb-3">
                  When you first visit our website, you'll see a cookie consent banner where you can:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your cookie preferences</li>
                  <li>Change your preferences at any time</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Blocking essential cookies may affect the functionality of our website and your ability to use certain features.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Impact of Disabling Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>Impact of Disabling Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                If you disable cookies, some features of our website may not work properly:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>You may need to log in again for each visit</li>
                <li>Your preferences and settings may not be saved</li>
                <li>Some forms may not retain your information</li>
                <li>Analytics and performance monitoring may be limited</li>
                <li>Personalized content and recommendations may not be available</li>
              </ul>
            </CardContent>
          </Card>

          {/* Updates to Cookie Policy */}
          <Card>
            <CardHeader>
              <CardTitle>Updates to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational,
                legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page
                and updating the "Last updated" date.
              </p>
              <p className="text-gray-600">
                We encourage you to review this policy periodically to stay informed about our cookie practices.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-lime" />
                <span>Contact Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                If you have any questions about our Cookie Policy or cookie practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">PiPi Print & Packaging Ltd</p>
                <p>10, Bardolph Street East</p>
                <p>Leicester LE4 6QJ</p>
                <p>United Kingdom</p>
                <p className="mt-2">Email: <a href="mailto:marketing@pipi.co.uk" className="text-lime hover:underline">marketing@pipi.co.uk</a></p>
                <p>Phone: +44 (0) 116 266 9242</p>
              </div>
            </CardContent>
          </Card>

          {/* Cookie Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-lime" />
                <span>Cookie Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                You can manage your cookie preferences at any time by clicking the "Cookie Settings" button
                in the footer of our website or by adjusting your browser settings as described above.
              </p>
              <p className="text-gray-600">
                Your cookie preferences will be saved and respected on future visits to our website.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}