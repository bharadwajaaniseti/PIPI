import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Lock, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-lime/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-lime" />
          </div>
          <h1 className="font-tenor text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: September 14, 2025
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Eye className="h-6 w-6 text-lime" />
                <span>Introduction</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p>
                PiPi Print & Packaging Ltd ("we", "our", or "us") is committed to protecting your privacy and personal data.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                or use our services.
              </p>
              <p>
                By using our website or services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Lock className="h-6 w-6 text-lime" />
                <span>Information We Collect</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Personal Information</h4>
                <p className="text-gray-600 mb-3">
                  We may collect the following personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Name and contact details (email, phone number, address)</li>
                  <li>Company information and business details</li>
                  <li>Project requirements and specifications</li>
                  <li>Communication history and preferences</li>
                  <li>Payment information (processed securely by third-party providers)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Technical Information</h4>
                <p className="text-gray-600 mb-3">
                  When you visit our website, we automatically collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent</li>
                  <li>Referral sources</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Provide and improve our packaging services</li>
                <li>Process orders and manage projects</li>
                <li>Communicate about your orders and services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our website and customer experience</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card>
            <CardHeader>
              <CardTitle>Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Service Providers:</strong> Trusted third parties who assist in operating our business</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Consent:</strong> With your explicit permission</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure data storage and access controls</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>Cookies and Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic,
                and personalize content. For detailed information about our cookie usage, please see our
                <a href="/legal/cookies" className="text-lime hover:underline">Cookie Policy</a>.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your data</li>
                <li><strong>Restriction:</strong> Limit how we process your data</li>
                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
              </ul>
              <p className="text-gray-600 mt-4">
                To exercise these rights, please contact us using the information provided in our Contact section.
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
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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

          {/* Updates */}
          <Card>
            <CardHeader>
              <CardTitle>Policy Updates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date.
              </p>
              <p className="text-gray-600">
                We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}